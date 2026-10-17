// Stand-in for the Poki SDK: the game calls these, nothing is shown.
(() => {
  const done = (value) => () => Promise.resolve(value);
  const noop = () => {};
  window.PokiSDK = new Proxy(
    {
      init: done(),
      getDeviceInfo: () => ({ category: "desktop", isMobile: false, isTablet: false, isDesktop: true }),
      getUser: done({}),
      getToken: done(""),
      commercialBreak: done(),
      rewardedBreak: done(true),
      displayAd: noop,
      destroyAd: noop,
      getURLParam: () => "",
      shareableURL: done(""),
      isAdBlocked: () => false,
      getLanguage: () => "en",
    },
    { get: (sdk, name) => (name in sdk ? sdk[name] : noop) },
  );
})();
