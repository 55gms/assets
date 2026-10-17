// Embedded analytics are optional; keep them local and inert on this host.
(() => {
 const hosts = new Set(['config.uca.cloud.unity3d.com','cdp.cloud.unity3d.com','api.gameanalytics.com','leveldata.poki.io']);
 const blocked = input => { try { return hosts.has(new URL(typeof input === 'string' ? input : input.url, document.baseURI).hostname); } catch { return false; } };
 const payload = JSON.stringify({configs:{},enabled:false});
 const get = window.fetch.bind(window);
 window.fetch = (input, options) => blocked(input) ? Promise.resolve(new Response(payload, {status:200,headers:{'Content-Type':'application/json'}})) : get(input, options);
 const open = XMLHttpRequest.prototype.open;
 XMLHttpRequest.prototype.open = function(method, url, ...rest) { if(blocked(url)) url = 'data:application/json,' + encodeURIComponent(payload); return open.call(this, method, url, ...rest); };
 if(navigator.sendBeacon) { const beacon = navigator.sendBeacon.bind(navigator); navigator.sendBeacon = (url, data) => blocked(url) || beacon(url, data); }
})();
