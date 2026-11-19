/* Stand-in for the GameDistribution SDK: shows nothing, never grants a reward. */
(function () {
  var noop = function () {};
  function fire(name) {
    try {
      var o = window.GD_OPTIONS;
      if (o && o.onEvent) o.onEvent({ name: name });
    } catch (e) {}
  }
  var sdk = {
    AdType: { Interstitial: "interstitial", Rewarded: "rewarded", Display: "display" },
    showBanner: noop,
    preloadAd: function () {
      return Promise.resolve();
    },
    cancelAd: function () {
      return Promise.resolve();
    },
    openConsole: noop,
    showAd: function (type) {
      if (type === "rewarded") return Promise.reject(new Error("no rewarded ad"));
      if (type === "display") return Promise.resolve();
      return new Promise(function (resolve) {
        setTimeout(function () {
          fire("SDK_GAME_START");
          resolve();
        }, 0);
      });
    },
  };
  window.gdsdk = sdk;
})();
