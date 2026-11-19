// Stand-in for the portal's ad API. No ads are shown here; the rewarded call goes
// to 55GMS Ads (GMSAds) and grants the reward only when the ad does.
function send(method, arg) {
    if (!window.myGameInstance) return;
    if (arg === undefined) window.myGameInstance.SendMessage('RHMAdsManager', method);
    else window.myGameInstance.SendMessage('RHMAdsManager', method, arg);
}

function InitSDKJs() {
    send('InitSucceed', 'ca-pub-8349441957149316');
    RewardedAdsLoaded();
}

function CallInterstitialAdsJs() {}

function LoadRewardedAdsJs() {}

function CallRewardedAdsJs() {
    if (!window.GMSAds) { RewardedAdsDismissed(); return; }
    var paused = false;
    var onPause = function () { paused = true; pauseGameBeforeAds(); };
    GMSAds.on('pause', onPause);
    GMSAds.showRewardedAd({ placement: 'rewarded' }).then(function (r) {
        GMSAds.off('pause', onPause);
        if (r && r.rewardGranted) RewardSuccessful();
        else RewardedAdsDismissed();
        if (paused) resumeGameAfterAds();
    });
}

function RewardedAdsLoaded() { send('isRewardedAdsLoaded', 'true'); }
function RewardedAdsNotLoaded() { send('isRewardedAdsLoaded', 'false'); }
function RewardedAdsDismissed() { send('RewardedAdsFailed'); }
function RewardSuccessful() { send('RewardedAdsSuccessfull'); }
function pauseGameBeforeAds() { send('pauseGame'); }
function resumeGameAfterAds() { send('resumeGame'); }
