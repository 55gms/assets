/* Stand-in for the GameDistribution SDK: answers every call, shows nothing, never grants a reward. */
(function () {
  var opts = window.GD_OPTIONS || {};
  function emit(name) {
    try {
      opts.onEvent && opts.onEvent({ name: name, message: "", status: "", gameID: opts.gameId });
    } catch (e) {}
  }
  var gdsdk = {
    AdType: { Interstitial: "interstitial", Rewarded: "rewarded", Display: "display" },
    showAd: function (type) {
      if (type === "rewarded") return Promise.reject(new Error("Rewarded ad not available"));
      return Promise.resolve({ args: { success: false } });
    },
    preloadAd: function () {
      return Promise.reject(new Error("Not available"));
    },
    cancelAd: function () {
      return Promise.resolve();
    },
    openConsole: function () {},
    getUserData: function () {
      return Promise.resolve({});
    }
  };
  window.gdsdk = gdsdk;
  setTimeout(function () {
    emit("SDK_READY");
    emit("SDK_GAME_START");
  }, 0);
})();
