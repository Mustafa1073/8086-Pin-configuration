const CACHE='8086-pins-v2';
const SHELL=['./','index.html','styles.css','script.js'];

self.addEventListener('install',e=>{
  // No skipWaiting here: the page shows "update available" and asks the worker to take over.
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL.map(u=>new Request(u,{cache:'reload'})))));
});

self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});

// Stale-while-revalidate: serve the cached copy at once, refresh it in the background.
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  const ok=url.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if(!ok)return;
  e.respondWith(caches.open(CACHE).then(async cache=>{
    const hit=await cache.match(req,{ignoreSearch:true});
    const net=fetch(req).then(res=>{
      if(res&&(res.ok||res.type==='opaque'))cache.put(req,res.clone());
      return res;
    }).catch(()=>null);
    return hit||(await net)||(req.mode==='navigate'?cache.match('index.html'):Response.error());
  }));
});
