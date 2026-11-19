/* Stand-in for GameDistribution's SDK: answers every call and shows nothing.
 * The game's own plugin injects <script id="gamedistribution-jssdk"> unless
 * that id is already on the page, so loading this file with that id keeps the
 * real SDK (and its ad and tracking requests) out. A rewarded call never
 * reports a reward; 55GMS Ads' adapter wraps showAd for real rewarded ads. */
(function () {
  "use strict";
  var options;
  function emit(name) {
    setTimeout(function () {
      try {
        if (options && typeof options.onEvent === "function") {
          options.onEvent({ name: name });
        }
      } catch (e) {}
    }, 0);
  }
  Object.defineProperty(window, "GD_OPTIONS", {
    configurable: true,
    get: function () {
      return options;
    },
    set: function (value) {
      options = value;
      emit("SDK_READY");
      emit("SDK_GAME_START");
    },
  });
  var AdType = { Interstitial: "interstitial", Rewarded: "rewarded", Display: "display" };
  window.gdsdk = {
    AdType: AdType,
    showAd: function (type) {
      if (type === AdType.Rewarded) {
        return Promise.reject(new Error("rewarded ad unavailable"));
      }
      return Promise.resolve({ success: true });
    },
    preloadAd: function (type) {
      if (type === AdType.Rewarded) {
        return Promise.reject(new Error("rewarded ad unavailable"));
      }
      return Promise.resolve();
    },
    cancelAd: function () {
      return Promise.resolve();
    },
    openConsole: function () {},
    getGameInfo: function () {
      return Promise.resolve({});
    },
  };
})();
