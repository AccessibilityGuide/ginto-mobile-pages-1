'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fafdc5d87c3f667097f62ecf0c1d4cea",
"version.json": "86af396b358d465123da8fe66b7c0d6f",
"redirect.html": "5017e1a38fe2bbf05f42737d570481b7",
"index.html": "b11e5b42f7126c31d2c4df611a2b7258",
"/": "b11e5b42f7126c31d2c4df611a2b7258",
"main.dart.js": "d4146c664ed3f5ec8496710b89f7fceb",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index-fullpagemode.html": "9d2d4728c89b55ea47585d8bc7f34054",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"host_web.js": "38b682f057cc22f8285d8d6d8eb57ed5",
"manifest.json": "e5abd3f4534d2fdde5bbff0d21f0b27e",
"assets/AssetManifest.json": "e6534c8335b78ba46d09c2c17828d8ac",
"assets/NOTICES": "a77c63ac40ddc05b067d0c099d77f81b",
"assets/FontManifest.json": "db5bda5e891042f832cdf1cc5612f773",
"assets/AssetManifest.bin.json": "2e3d56d23dba6e9fffd6744c96df9b9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0640fe71f01ee0bbb7c91d263062883e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7fb23ef8deb14237415703f5ee67832f",
"assets/fonts/MaterialIcons-Regular.otf": "cff2421f5978de2e36d279b948e1e971",
"assets/assets/images/icon_map_location_active.png": "288812240de3e63cb6abf7ce35a855b0",
"assets/assets/images/icon_error.svg": "76f6084b05be9f89d41ab3c14aad43f5",
"assets/assets/images/badge-indicator-partially.svg": "f3ba59f0eeb6311b107b2ee1b25e8f9d",
"assets/assets/images/icon_header_add.png": "c1a5f81bbf6b6f976e4d4f8bf370e313",
"assets/assets/images/markers_laguna.png": "c97653e0842ecfa9843adba1ab54b535",
"assets/assets/images/icon_seal_of_quality.png": "d4b7a0726d561d347ebcdbfbc7c3106c",
"assets/assets/images/room.svg": "e9f6a4eb68c6c0beaadc852223b90d56",
"assets/assets/images/icons_controls_locate.svg": "1e7315d5eadc0785fbdf7dc8bef12ea4",
"assets/assets/images/icon_navigationbar_share.png": "9f775aba7a7856c05d7ee81419d644ee",
"assets/assets/images/badge-indicator-comment.svg": "3cee1b53880d788ffe13934c304ee86e",
"assets/assets/images/access_classification_endpoint.svg": "534b58749adec70e07b606dd293e364e",
"assets/assets/images/access_classification_impediment_only.svg": "22e32a3338e557c46b9d2819492d3dc4",
"assets/assets/images/2.0x/icon_map_location_active.png": "358cc9d6e64e2500b8c3e585aeb85249",
"assets/assets/images/2.0x/icon_header_add.png": "d521603cb1cfefce4ce6774a90dc2573",
"assets/assets/images/2.0x/markers_laguna.png": "48e2203d0fda2c828188f2c792b10845",
"assets/assets/images/2.0x/icon_seal_of_quality.png": "e00c10110815b04e6b459cbdc1879697",
"assets/assets/images/2.0x/icon_navigationbar_share.png": "e1fcffd7ee10fa2e009417268dae68be",
"assets/assets/images/2.0x/markers_black.png": "291497f37b3700af9594cd9ede8c6dc6",
"assets/assets/images/2.0x/illustration_empty_image.png": "e4d536d54177a7e1b8d04a8b37d26a4d",
"assets/assets/images/2.0x/icon_tabbar_profile_active.png": "efe951e53c4897ed0016b0f62a1bb220",
"assets/assets/images/2.0x/icon_tabbar_record_active.png": "875545823545608e844253e023f84ee3",
"assets/assets/images/2.0x/tutorial_04.png": "9ad6debad45877a965ba36404e27ea91",
"assets/assets/images/2.0x/icon_tabbar_profile_default.png": "c69dbb3ac6025a250c429158cbcda71e",
"assets/assets/images/2.0x/icon_tabbar_search_default.png": "d1ae88bbf78cc8595e9c651e471798b1",
"assets/assets/images/2.0x/icon_tabbar_record_default.png": "3f0b77f0d80203e8558520caa8831260",
"assets/assets/images/2.0x/icon_tabbar_search_active.png": "b6e8309cf3f117de72f06b4eeca51195",
"assets/assets/images/2.0x/tutorial_02.png": "35c13df0cfe938a119c56cd70003db75",
"assets/assets/images/2.0x/tutorial_03.png": "773be3c611064a4723838560bdd2cbef",
"assets/assets/images/2.0x/icon_header_search.png": "5691868c67fe43788fe172dc1ef4c8cb",
"assets/assets/images/2.0x/tutorial_01.png": "85f6ec5e559559d93b8dd06ee3325013",
"assets/assets/images/2.0x/icon_navigationbar_map_round.png": "07c636ad30a4732e12c05568a6b68a76",
"assets/assets/images/2.0x/icon_area_pen.png": "20d1fe3f23d1fa76d58c38d4ef95dfb4",
"assets/assets/images/2.0x/icon_map_location_compass.png": "4fd8b3c6a737915662956b3359b6c8ef",
"assets/assets/images/2.0x/icon_header_profile.png": "7de71ebea53eb696dbb4a8578dc029ec",
"assets/assets/images/2.0x/markers_lemon.png": "ca0a61a998d363f31f700dd1362e3514",
"assets/assets/images/2.0x/markers_coral.png": "8d9b5b6ea6871cfc705c2fb7c2861d50",
"assets/assets/images/2.0x/icon_map_location_default.png": "27019dface54eafe951a7b7601720d7b",
"assets/assets/images/markers_black.png": "a330be037c2bdd0e3860349e9a6f644d",
"assets/assets/images/icons_controls_close.svg": "bead8090e07e63a9b481f6a9b4b25c48",
"assets/assets/images/badge-indicator-completely.svg": "89006d33b2633101ecc4b642f3d552b8",
"assets/assets/images/icon_seal_of_quality.svg": "01139d6b32ac72837170b4436245da45",
"assets/assets/images/illustration_empty_image.png": "e4d536d54177a7e1b8d04a8b37d26a4d",
"assets/assets/images/badge-indicator-camera.svg": "6e8af80b87abbb6b55e4bf48b5ca8b4f",
"assets/assets/images/access_classification_impediment_and_alternative.svg": "8878ba75424b60e1983f0a6a8e98cc80",
"assets/assets/images/icon_tabbar_profile_active.png": "6bed78204685f201167dd248bf79e82e",
"assets/assets/images/3.0x/icon_map_location_active.png": "c2e10fd76db1e0068a9f41c7c444e1d1",
"assets/assets/images/3.0x/icon_header_add.png": "5920d4e9ce09d51b8fae20c4f972d3bc",
"assets/assets/images/3.0x/markers_laguna.png": "a7bea47b52769f381999545768743211",
"assets/assets/images/3.0x/icon_seal_of_quality.png": "bf217c2bf34972e27319e754ed827956",
"assets/assets/images/3.0x/icon_navigationbar_share.png": "343ed465631d1fca680eee5e18414f5f",
"assets/assets/images/3.0x/markers_black.png": "6ffa881f6269f2845792e9ce55d1494c",
"assets/assets/images/3.0x/illustration_empty_image.png": "e4d536d54177a7e1b8d04a8b37d26a4d",
"assets/assets/images/3.0x/icon_tabbar_profile_active.png": "4d19541a570ccbe643b8077c60e3e007",
"assets/assets/images/3.0x/icon_tabbar_record_active.png": "5d9e97c4cbec6254b6621d524672a6e0",
"assets/assets/images/3.0x/tutorial_04.png": "bae88d4cb17a976da87740422b7f8881",
"assets/assets/images/3.0x/icon_tabbar_profile_default.png": "803ef2b01cea72d1cf962c2dd29f92ba",
"assets/assets/images/3.0x/icon_tabbar_search_default.png": "a4ca9e3b718ff581ebaa5440399db436",
"assets/assets/images/3.0x/icon_tabbar_record_default.png": "659df570bb074eacf15ae13041ea435f",
"assets/assets/images/3.0x/icon_tabbar_search_active.png": "4e7d13a7277360c81bd6e0517946cb8a",
"assets/assets/images/3.0x/tutorial_02.png": "9e9e14eba6356054fa55d53b8f34e61a",
"assets/assets/images/3.0x/tutorial_03.png": "c4eb1117b257fb1e5d1f74b73c34686e",
"assets/assets/images/3.0x/icon_header_search.png": "f8f34414d6b2f10edbf15898e8f1c45f",
"assets/assets/images/3.0x/tutorial_01.png": "39f89f42bffd307f170340a582d5f504",
"assets/assets/images/3.0x/icon_navigationbar_map_round.png": "ecef5427b4b9dec68ca9abd6092e2a63",
"assets/assets/images/3.0x/icon_area_pen.png": "ac745ef6d918184862b57272c951e321",
"assets/assets/images/3.0x/icon_map_location_compass.png": "8722581ced2308285a866ac1ca2cbe09",
"assets/assets/images/3.0x/icon_header_profile.png": "3e29eb9d017a8b89f4af6d9009354373",
"assets/assets/images/3.0x/markers_lemon.png": "584ce7f13d01073e43d6fd2f7cd3b211",
"assets/assets/images/3.0x/markers_coral.png": "8b71cf70aff761b4f6b734ae30d4731b",
"assets/assets/images/3.0x/icon_map_location_default.png": "d57589c9ab997925d74d667165781470",
"assets/assets/images/icons_controls_chevron_down.svg": "b00fd39e0ef310cd349af73f178c7f7e",
"assets/assets/images/icons_controls_info.svg": "f12feee20eb1de2d2d05aa19c2e7ca0d",
"assets/assets/images/icon_tabbar_record_active.png": "341c0f0540d8d6fd518038657b0e0ea6",
"assets/assets/images/tutorial_04.png": "0a9ea04989d5fcd5c32deffee85ab414",
"assets/assets/images/icon_tabbar_profile_default.png": "31c35e178b1e5bc00f60d05544c416fd",
"assets/assets/images/icon_tabbar_search_default.png": "71fc776e433aa3dc37d8eeaad30861a0",
"assets/assets/images/icon_tabbar_record_default.png": "8e0c85becd13eebb8796bd389c1cef56",
"assets/assets/images/badge-indicator-badly.svg": "7bfbe2ed84fd471264d74d696a3f97b4",
"assets/assets/images/icon_tabbar_search_active.png": "1351789f4023f203db032586517ad607",
"assets/assets/images/badge-incomplete.svg": "7da3f3370b6370491da570b2b33fd21b",
"assets/assets/images/icons_controls_chevron_left.svg": "4638b695f77058c8fcdc8371916875ee",
"assets/assets/images/tutorial_02.png": "749cbcd2dcf3cc6d970d37152b5c8eee",
"assets/assets/images/no_search_results.svg": "8e8b0d765506aaae23511052151a13f8",
"assets/assets/images/logo_green.svg": "331651c73fc9f17c2a14b6b652535071",
"assets/assets/images/tutorial_03.png": "32c2ab6087b3ce53399ab35961e136fe",
"assets/assets/images/icon_info.svg": "3bf3be5095793f699d2f30c4c3aa1ebf",
"assets/assets/images/icon_header_search.png": "aefa29e75b78be95af559fb5eaa6d3e7",
"assets/assets/images/icons_controls_edit.svg": "689845ea2ba787b6f3f1852fc2e0c7cb",
"assets/assets/images/tutorial_01.png": "7902cfc7067719aa5e88cdf25f23a3da",
"assets/assets/images/icon_navigationbar_map_round.png": "c5a8225f3214e875649b86c21e7b7f99",
"assets/assets/images/icon_checkmark_fine.svg": "9d3cbd153ce870af1934bd72da702a65",
"assets/assets/images/access_classification_impediment_no_selected_alternative.svg": "2bb1a965df953002a2613dbc2badead6",
"assets/assets/images/icon_area_pen.png": "db7d2f974c938f10a95bbf5760c0415f",
"assets/assets/images/icon_map_location_compass.png": "0739c49cd18a242b193fd15083c8c530",
"assets/assets/images/badge-indicator-unknown.svg": "ab9418b781a169bf50d6cab5c2f6fed5",
"assets/assets/images/logo_white.svg": "177a7cffe72988ef434e9d763e9899fe",
"assets/assets/images/icon_header_profile.png": "1308c0313212499df97ea7277ae98a4a",
"assets/assets/images/markers_lemon.png": "8a2968047cc861b78d778a19850cf385",
"assets/assets/images/illustration_no_properties.svg": "c0ec35cb0991a8e44261c770b5979e1b",
"assets/assets/images/markers_coral.png": "8e498c74d3cb6c9e093984620dc4b62e",
"assets/assets/images/no_contribution.svg": "7ace73a724d0301e922f8922aade0404",
"assets/assets/images/icon_map_location_default.png": "c4be85afcfb184d92da5a4ac183a5faa",
"assets/assets/images/illustration_no_subareas.svg": "1856be42abfb73924495f093e249d546",
"assets/assets/images/access_classification_startpoint.svg": "73cd7e5621a541bb0d09a772bd1caa46",
"assets/assets/certificates/lets-encrypt-r11.pem": "5e1eb33c2d6881c8d4ed0389683a0630",
"assets/assets/certificates/lets-encrypt-r10.pem": "c0d3b5397d28836e46a62b3cd5f4fc23",
"assets/assets/certificates/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/gifs/loader_green.gif": "f75ca8ac3841b22ccbf83368d290b395",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/GintoIcons.ttf": "a3d9255f4f1b16198c4d15a7e660f04a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
