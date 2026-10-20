// Stand-in for the Yandex Games SDK: the game calls these, nothing is shown.
window.YaGames = (() => {
  const noop = () => {};
  const done = (value) => () => Promise.resolve(value);
  const unavailable = (what) => () => Promise.reject(new Error(`Yandex ${what} is not available`));
  const lang = (navigator.language || "en").split("-")[0];

  // The game pauses on onOpen and resumes on onClose, so both must run, in that order.
  // No reward without an ad: 55GMS Ads' SDK (sdk.min.js) replaces showRewardedVideo.
  const ad = (options) => {
    const callbacks = options?.callbacks || {};
    const call = (name, ...args) => {
      try {
        callbacks[name]?.(...args);
      } catch {}
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        call("onOpen");
        call("onClose", true);
        resolve();
      }, 0);
    });
  };

  const sdk = {
    adv: {
      showFullscreenAdv: ad,
      showRewardedVideo: ad,
      showBannerAdv: done({ stickyAdvIsShowing: false }),
      hideBannerAdv: done({ stickyAdvIsShowing: false }),
      getBannerAdvStatus: done({ stickyAdvIsShowing: false }),
    },
    features: { LoadingAPI: { ready: noop }, GameplayAPI: { start: noop, stop: noop } },
    deviceInfo: {
      type: "desktop",
      isMobile: () => false,
      isTablet: () => false,
      isDesktop: () => true,
      isTV: () => false,
    },
    environment: { app: { id: "" }, browser: { lang }, i18n: { lang, tld: "com" }, payload: null },
    auth: { openAuthDialog: unavailable("sign-in") },
    getPlayer: unavailable("player"),
    getLeaderboards: unavailable("leaderboards"),
    getPayments: unavailable("payments"),
    getStorage: done(window.localStorage),
    getFlags: done({}),
    feedback: { canReview: done({ value: false }), requestReview: done({ feedbackSent: false }) },
    shortcut: { canShowPrompt: done({ canShow: false }), showPrompt: done({ outcome: "rejected" }) },
    screen: { fullscreen: { status: "off", request: noop, exit: noop } },
    isAvailableMethod: done(false),
    onEvent: () => noop,
    dispatchEvent: done(),
    EVENTS: { EXIT: "EXIT", HISTORY_BACK: "HISTORY_BACK" },
  };

  return { init: done(sdk) };
})();
