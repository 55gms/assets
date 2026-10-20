// Adapted from GN-Math 284; upstream analytics and ad injection omitted.
let myGameInstance;
let environmentData = { language: "en", browser: undefined };
let cloudSaves = "noData", paymentsData = "none", playerData = "noData";
let player = null, payments = null, ysdk = null;
let initGame = false, nowFullAdOpen = false;
function FocusGame() { window.focus(); document.getElementById("unity-canvas").focus(); }
function GetPayments() { return Promise.resolve("none"); }
function InitGame(photoSize, scopes) {
  initGame = true;
  window.photoSizeForInit = photoSize;
  window.scopesForInit = scopes;
}
function GameReadyAPI() {}
function FullAdShow() {
  if (nowFullAdOpen) return;
  nowFullAdOpen = true;
  if (initGame) myGameInstance.SendMessage("YandexGame", "OpenFullAd");
  setTimeout(() => {
    nowFullAdOpen = false;
    if (initGame) myGameInstance.SendMessage("YandexGame", "CloseFullAd", "true");
    FocusGame();
  }, 500);
}
// 55GMS Ads: the reward comes only with an ad GMSAds (sdk.min.js) grants.
function RewardedShow(id) {
  const send = (method, arg) => {
    if (!myGameInstance) return;
    if (arg === undefined) myGameInstance.SendMessage("YandexGame", method);
    else myGameInstance.SendMessage("YandexGame", method, arg);
  };
  if (!window.GMSAds) return send("ErrorVideo");
  let opened = false;
  const onPause = () => {
    opened = true;
    send("OpenVideo");
  };
  GMSAds.on("pause", onPause);
  GMSAds.showRewardedAd({ placement: "rewarded", rewardId: String(id) }).then((r) => {
    GMSAds.off("pause", onPause);
    if (r.rewardGranted) {
      if (!opened) send("OpenVideo");
      send("RewardVideo", id);
      send("CloseVideo");
    } else send(opened ? "CloseVideo" : "ErrorVideo");
    FocusGame();
  });
}
window.addEventListener("pointerdown", FocusGame);
(async () => {
  const loader = GameLoader;
  loader.prepare([
  [
    "kb.data.js",
    18559411
  ],
  [
    "kb.wasm.js",
    6240136
  ],
  [
    "kb.work.js",
    70178
  ]
]);
  const [dataUrl, codeUrl, frameworkUrl] = await Promise.all([
    loader.merge(["kb.data.js"]),
    loader.merge(["kb.wasm.js"], "application/wasm"),
    loader.merge(["kb.work.js"], "application/javascript"),
  ]);
  await loader.script("kb.loader.js");
  const canvas = document.getElementById("unity-canvas");
  const config = {
    dataUrl, codeUrl, frameworkUrl,
    streamingAssetsUrl: new URL("StreamingAssets", document.baseURI).href,
    companyName: "BANZAI",
    productName: "War The Knights",
    productVersion: "1.0",
    devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    showBanner(message, type) {
      if (type === "error") loader.fail(new Error(message));
      else console.warn(message);
    },
  };
  myGameInstance = await createUnityInstance(canvas, config);
  loader.finish();
})().catch(GameLoader.fail);
