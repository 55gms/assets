// Stand-in for the Poki SDK and the bridge Poki's Unity loader used to define:
// the game calls these, nothing is shown.
// No reward without an ad: 55GMS Ads' SDK (sdk.min.js) replaces rewardedBreak.
(() => {
  const done = (value) => () => Promise.resolve(value);
  const noop = () => {};
  window.PokiSDK = new Proxy(
    {
      init: done(),
      commercialBreak: done(),
      rewardedBreak: done(false),
      displayAd: noop,
      destroyAd: noop,
      getURLParam: () => "",
      shareableURL: done(""),
      isAdBlocked: () => false,
      getLanguage: () => "en",
      getDeviceInfo: () => ({ category: "desktop" }),
      customEvent: noop,
      logError: noop,
    },
    { get: (sdk, name) => (name in sdk ? sdk[name] : noop) },
  );

  // The build registers its bridge object with initPokiBridge(name), then calls
  // window.commercialBreak / window.rewardedBreak and waits for the reply sent
  // to that object through window.unityGame (set by the page once Unity runs).
  const send = (name, method, value) => {
    if (!window.unityGame) return setTimeout(() => send(name, method, value), 100);
    try {
      if (value === undefined) window.unityGame.SendMessage(name, method);
      else window.unityGame.SendMessage(name, method, value);
    } catch {}
  };
  window.initPokiBridge = (name) => {
    window.commercialBreak = () =>
      PokiSDK.commercialBreak().then(() => send(name, "commercialBreakCompleted"));
    window.rewardedBreak = (...args) =>
      PokiSDK.rewardedBreak(...args).then((watched) =>
        send(name, "rewardedBreakCompleted", String(!!watched)),
      );
    window.shareableURL = (params) =>
      PokiSDK.shareableURL(params).then((url) => send(name, "shareableURLResolved", url));
    send(name, "ready");
  };
})();
