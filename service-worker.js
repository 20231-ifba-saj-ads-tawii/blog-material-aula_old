if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),c={module:{uri:d},exports:r,require:b};s[d]=Promise.all(f.map((e=>c[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-24a20688"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Blog Aulas 20231 TAWII"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/00_links_uteis.html.0392eadb.js",revision:"b7679e09614bd31cde36e9b9950220ad"},{url:"assets/00_links_uteis.html.e779a4da.js",revision:"2c85c042d54d85a179bd9258292ee445"},{url:"assets/01_devops.html.0e574c13.js",revision:"ce69c01f0edfb4c59250be4f201b32c5"},{url:"assets/01_devops.html.acf0c312.js",revision:"ca49b70612b8be3be2650e840dd65d3f"},{url:"assets/02_virtualizacao.html.53697dff.js",revision:"18516aa92f2bab740319f9e72aca6999"},{url:"assets/02_virtualizacao.html.e3a63f68.js",revision:"a5d5c62a9f8459f1e1051f3d382c2ba1"},{url:"assets/03_container.html.653feb20.js",revision:"065c806a146cb7acca9f421955639459"},{url:"assets/03_container.html.d05ecd12.js",revision:"8e6cdb544da8fa717e92974b84fb6eab"},{url:"assets/404.html.23336ab9.js",revision:"00aef39a2773e9cf4b8f6c691e989969"},{url:"assets/404.html.b58aceef.js",revision:"3ac4cbffae3ccef5345246aba0265a5b"},{url:"assets/app.e6281ea9.js",revision:"c9cdb042b5f850f3abc77e3164b92c01"},{url:"assets/auto.56c9cb2e.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/bib.html.30774c12.js",revision:"e6ef582208615811bea20528e2bead20"},{url:"assets/bib.html.7f838f53.js",revision:"6bed7dd8b70d9b4ee76a58d3ce8358f9"},{url:"assets/ementa.html.1ec1d5a7.js",revision:"a0a898fb9021b9ca0f499cba3332957b"},{url:"assets/ementa.html.3b0b0180.js",revision:"aa568d266f19fec55b1f051fc1620fba"},{url:"assets/flowchart-elk-definition-170a3958.544d5af9.js",revision:"a19da2d497b80dfc7ed349229b77fc2d"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/highlight.esm.eb2cc8ba.js",revision:"03fd0d81382c7ceb78bfe9788ef0ee17"},{url:"assets/index.b582fbbb.js",revision:"94dab395eb42bd49f876f0f6acc5d14c"},{url:"assets/index.html.0341c56d.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.1dd9ba01.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.396fb1fc.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.3b08c7a1.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.3e25e253.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.4042f8c0.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.48777925.js",revision:"64e017617b430a50fa27250dcfdbc012"},{url:"assets/index.html.530368f5.js",revision:"083a8a2830a24e0ba0114ec36012a237"},{url:"assets/index.html.65b5389d.js",revision:"49d73bc4cc4059beb334e5a697dbf7a2"},{url:"assets/index.html.74cb6731.js",revision:"ccea6eae0fe1319fba6644bbc9b66163"},{url:"assets/index.html.76f5afbb.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.839f1f2e.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.847cc99e.js",revision:"fb290fe345200dbfa984fb0646cacd3a"},{url:"assets/index.html.86ade023.js",revision:"1746bec5fa3f6ab4d0ace9c872514242"},{url:"assets/index.html.917e255a.js",revision:"e958edfdf38829ba66bf0a6bbc69bec6"},{url:"assets/index.html.a95f3644.js",revision:"b59777a8ebc83abff5225cf44b5ca82f"},{url:"assets/index.html.b8dc3e82.js",revision:"e50bf774a79be3072d8449a4580cb3f9"},{url:"assets/index.html.b90df83d.js",revision:"5f505408b5570e10f40c0beb62425495"},{url:"assets/index.html.b918c971.js",revision:"20684df7b599b436f1e3863de0434cc0"},{url:"assets/index.html.bcb5eac2.js",revision:"498bab7f46aefda744a879c176843793"},{url:"assets/index.html.c77b8be7.js",revision:"54d5143a066370e967abb61ee78e4c5f"},{url:"assets/index.html.c8fb77e5.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.c95a68ca.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.cc32e1be.js",revision:"4bbe4c4364cb96e7557ba883c72091ee"},{url:"assets/index.html.d42d7182.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.d6a47966.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.d751371f.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.e34a7025.js",revision:"981fcf1f8164efe999109c7df69ee188"},{url:"assets/index.html.e7e9db50.js",revision:"f40dc82eff0aac8948200d09b660f15a"},{url:"assets/index.html.e8d8f631.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.f0c175f4.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.f731ab73.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/index.html.f8958881.js",revision:"c5f730d1799f7a0e04a3689433063b37"},{url:"assets/index.html.f899f247.js",revision:"e57b8c3513b1568ab1930a8ddbb94ee8"},{url:"assets/intro.html.a444f0ac.js",revision:"f2a402311fab0a42f5ebd65c7e674d5a"},{url:"assets/intro.html.bc268f60.js",revision:"17047e11809c7e58f415cd27c795e759"},{url:"assets/is_dark.55b86e59.js",revision:"28b854ab395c62cea881a0842d218ca6"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.d1eeafa8.js",revision:"06af10e15ef8fc98c28ecd3210914d2c"},{url:"assets/math.esm.7a322a9b.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core.b1ab2e4d.js",revision:"6ab4e6f27da1c7df133c8bb1d8cee86c"},{url:"assets/mindmap-definition-44684416.f69c6df8.js",revision:"4be641d7633b29ead9bdfaef8e03a0e4"},{url:"assets/notes.esm.179b6d54.js",revision:"d69448b7d7795827b4393993da6372ad"},{url:"assets/photoswipe.esm.70b33614.js",revision:"3579c2537b17f33ba258dbd6596a21e8"},{url:"assets/reveal.esm.7f17adf0.js",revision:"44a8c3fa85d36fcc593a0d5a0527435a"},{url:"assets/search.esm.809d0876.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.4168a478.css",revision:"dd1337caf05bb3a1d1b2793bd45e5533"},{url:"assets/TemplateSteps.html.3f4b82b3.js",revision:"e48d21f40448693a2c76824145f29652"},{url:"assets/TemplateSteps.html.c628a31e.js",revision:"f4ddaed7d2d609c0f7900f8af8aba3fe"},{url:"assets/timeline-definition-8e5a9bc6.1cd2f94a.js",revision:"6fdfe4ecdae7989cee895e401e525031"},{url:"assets/zoom.esm.c14ac61c.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"index.html",revision:"a952751d14c0625f6861942337e7d186"},{url:"404.html",revision:"22413967b38f89ae6bc351bad5a70657"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map