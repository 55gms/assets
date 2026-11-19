"use strict";
// The game's ad calls, answered with nothing: 55GMS shows no Smash Karts ads
// here. Rewarded calls do nothing, so no reward is ever granted.
function noop() {}
var hideLoadingBanner = noop;
var updateLoadingAdBanner = noop;
var updateAdBlockDetected = noop;
var trySendAdBlockDetectedMessage = noop;
var setElementSize = noop;
var hideMainMenuBanner = noop;
var showMainMenuBanner = noop;
var hideWinCeremonyBanner = noop;
var showWinCeremonyBanner = noop;
var hideSpectateBanner = noop;
var showSpectateBanner = noop;
var hideLongBanner = noop;
var showLongBanner = noop;
var showInterstitial = noop;
var showNonRewardedInterstitial = noop;
var tryInitRewardedInterstitial = noop;
var tryShowRewardedInterstitial = noop;
var requestLoadingAd = noop;
var hideLoadingAd = noop;
var requestMainMenuAd = noop;
var hideMainMenuAd = noop;
var requestWinCeremonyAd = noop;
var hideWinCeremonyAd = noop;
var requestSpectateAd = noop;
var hideSpectateAd = noop;
var requestDeathAd = noop;
var hideDeathAd = noop;
var requestOffCanvasAd = noop;
var hideOffCanvasAds = noop;
