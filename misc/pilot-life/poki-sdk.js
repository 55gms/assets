// Stand-in for the Poki SDK: answers every call and shows no ads.
// Rewarded breaks resolve as watched so in-game rewards still work.
(function () {
  var done = function () {
    return Promise.resolve();
  };
  var sdk = {
    init: done,
    initWithVideoHB: done,
    commercialBreak: function (onStart) {
      return Promise.resolve();
    },
    rewardedBreak: function (opts) {
      if (opts && typeof opts.onStart === "function") opts.onStart();
      return Promise.resolve(true);
    },
    displayAd: function () {},
    destroyAd: function () {},
    getURLParam: function (name) {
      return new URLSearchParams(location.search).get(name) || "";
    },
    getLanguage: function () {
      return (navigator.language || "en").slice(0, 2);
    },
    getIsoLanguage: function () {
      return (navigator.language || "en").slice(0, 2);
    },
    isAdBlocked: function () {
      return false;
    },
    shareableURL: function () {
      return Promise.resolve(location.href);
    },
    getLeaderboard: function () {
      return Promise.resolve([]);
    },
    getUser: function () {
      return Promise.resolve(null);
    },
    getToken: function () {
      return Promise.resolve(null);
    },
    login: function () {
      return Promise.reject(new Error("Not available"));
    },
  };
  var noop = function () {};
  window.PokiSDK = new Proxy(sdk, {
    get: function (target, key) {
      if (key in target) return target[key];
      // Not "then", or awaiting the SDK object would never settle.
      return typeof key === "string" && key !== "then" ? noop : undefined;
    },
  });
})();
