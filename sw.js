// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "3aa21cec0bc1d076cd534d161b07934b"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "d0b4b3b4acc40036cdb6805cc82c98bd"
  },
  {
    "url": "basic/class/index.html",
    "revision": "d67e9780343add21e0d8b15fefda5258"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "a9de5f056e1ffd890ccdbe4cb5f91377"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "b41792c827ebbd7dc667511c86fa09db"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "ed56028803c9555d8048364558c8c23d"
  },
  {
    "url": "basic/date/index.html",
    "revision": "9465a66c9118790133fa76dab97cafd9"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "8840a44dbefb8786bad2efa7ce15a57f"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "bb3b5e8d0c014a0a5ef8fc4f05adafb0"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "598ea24b0d6063e9c63f070ebfc7abeb"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "2fb37e301ffe1f11e5182b6fc355c3b4"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "a42633415609df46ff5118d700c5e7a6"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "07f6c92efc67ad3aad85cd799a5eff3c"
  },
  {
    "url": "basic/index.html",
    "revision": "849208eb2e16a15282203cb9a62815b4"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "9aaa20b269134aab49da014cd2547285"
  },
  {
    "url": "basic/json/index.html",
    "revision": "604098fee8abb69385c80cb20801b114"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "9a53d17054a5e627ded96c47d885c21e"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "80d849bd46841ca34b00dbacfa7bf307"
  },
  {
    "url": "basic/math/index.html",
    "revision": "ae79f588bba483182b684b8618c8ba0a"
  },
  {
    "url": "basic/object/index.html",
    "revision": "e29129dd0f8fa00d2d5b27cb5467ebce"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "8c6caee76d19f56676378002d6766415"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "11c7d6cb8db317855cfdf42cf75558b0"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "ee1a7422850479b9d949e76eb8805029"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "5c325736409211ea0fb241c91cd8239f"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "84563ff45aad04e80f11a81da6e35eb8"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "ef7c7e669778742553401ca9a199796e"
  },
  {
    "url": "basic/string/index.html",
    "revision": "80ce27aacacf3918c37cf2a04640ed16"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "afc7beb28130be42ffaaa144107e18ea"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "a790acdd8ba72ce6b3872950f992bebf"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "3b2ea4721b2303d95cdf42448c59012e"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "23115608a19f50cbd00974471747e137"
  },
  {
    "url": "intro/index.html",
    "revision": "795acc8decebf9d30b3935d741478eb7"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "8575c4d4dfa38d0fcf649a5ee2cd9329"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "1bf50123dd7fe8053c579742357ec970"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "7c0c8fc00703294556997fb8efa2f7fd"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "e1df96c10be2693de3909e98d272fd31"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "fcd4e4c8c1da913eae8751a235b5037e"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "937f44b83967231567c263b6c874461e"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "6160ba73b6620406d2d864729d1d55ea"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "c147b522791ed131d117af090d4065fa"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "0a6e0f6e4d78f6ef8b2fdaced01ec28b"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "d86dd5f8bd529e577d5ed6708204e386"
  },
  {
    "url": "use-case/index.html",
    "revision": "26f0df17d17cc7cc0c3a48536b3bac49"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "b852c1a26dd95190662e5a228a2cc221"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "87688897eb3e8bddf4c78454a4d80860"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "278857ab7f825e46de7124c99381dfe3"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "79b595a9895354cbda5fc69bc23901ea"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "e48a7aeecd140b0f0b0a254397ab9fd4"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "607f206e9f624f4a4f48602e72ad9768"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "1eaea156a5cd3a46259691b2af240358"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "ec52b9890d8354b4021e271bc7db4cf8"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "bdad8527c5f41a49d41083c227b8286f"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "614ad24a2ce2e3f361cb4c5be2bf0d58"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "05d2df3f89ce04ee02638e4910988282"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "1ab70ae137d05d8f1d2fccae6b660cd1"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "d5c00c9e922d01a9b80f83b1411c0e0e"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "6c0a5b98855d2a23574a72fc2860bcf2"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "ca5256a6562e467000fa4c51119c300e"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "66159d8ecc336ca69b6b53879feba820"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "4040384a97856806feb6c3dab510c98a"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "9867fab7cbe57eb9517c90fae24ca5f9"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  }
]);