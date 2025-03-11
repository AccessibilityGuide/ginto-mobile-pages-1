'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fafdc5d87c3f667097f62ecf0c1d4cea",
"version.json": "86af396b358d465123da8fe66b7c0d6f",
"redirect.html": "5017e1a38fe2bbf05f42737d570481b7",
"index.html": "3f9dbc428ea9d8cbb27a6fb585e193a7",
"/": "3f9dbc428ea9d8cbb27a6fb585e193a7",
"main.dart.js": "7e9e1042774307d893f87f4b3d506f39",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index-fullpagemode.html": "9d2d4728c89b55ea47585d8bc7f34054",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"host_web.js": "38b682f057cc22f8285d8d6d8eb57ed5",
"manifest.json": "e5abd3f4534d2fdde5bbff0d21f0b27e",
".git/config": "6b247036851b271128cb31218ae60454",
".git/objects/0d/71441ab2f733cbaee04b300c8f6ede0b2acd7a": "a2685566d3b7aafbf5cd77ea4b44a063",
".git/objects/59/0972002dd2b6726ecce972e6f6b517864e34ea": "8d5d59afba2690eb9c4010d6d55f98e2",
".git/objects/59/a3500e543e40a3b825fdbdbf49c6201a02d59a": "285f4fff3a9e72728d349548b71346c3",
".git/objects/92/d7bf7b2f62afaf6d49d69e4099e25069fa1e05": "a90743749a5fcbc59bd9a6e0dd785cb9",
".git/objects/3e/91f3a979796e59e5802f0df169489385c48eba": "661a1e59437c3637af0a0163d1dd4142",
".git/objects/50/896338ffee9a85eaa9b61ab5ffb26739854761": "ca727ecff3c6f651bb8695f737fbce25",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/316726325172c0ba70dd7ea51b410db4e0f2c4": "ba23f144e7f7c5cf037491ebc1a92076",
".git/objects/6f/2e5ef628933c068aa908460ec4168faeef0bbc": "9f69d606ef49e294bc3598b7eef5b34a",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/9b/b783a2ea36adb632e2a095c1639d19e6edc02f": "f37d0674798825537b1ae8d4e1fce945",
".git/objects/04/d4a78da8389a9ca52484f3e3207ac77c600f00": "7d3df93efe7474a87a9b57bc9e43f6b4",
".git/objects/32/627d886c57f72da689ee31a6504d4140024935": "fb6f0c3dd2228352877b94c03d5b7748",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/8de18c0b15bf46eec834abec8b8d42f0ff4ab1": "75e55e570b2ccd3787a0af5cb1de599d",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/4f0af8ceaddce458c358731925f349b7c1348b": "14b123388b84747b1c696f14d42714e5",
".git/objects/51/42cca1d39728b873706db34c2afbb848d0199f": "bd51baabb1c631559cf40a78cfe5a52e",
".git/objects/58/47d116d977a81da6acbc8409c19b7b9832e2e4": "38d6da2f48fbe68bdcb9d455b7b159bb",
".git/objects/58/4fac56800c023a56b4a4d996dd8b486d494a1f": "ca5f3716ef27c8c3c0a79f1a9f7b03dd",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0e/845a7565968b987f9f9b086f051d7eedd18f67": "e44189d1b78f915c2c27df57bc913c85",
".git/objects/5a/9f5a6c0a1a1d0f987f1633cb1b93be4de684a1": "142a6190e382bdb9d0a8977c81eb4a86",
".git/objects/5f/78fb21f2a485d9576129663bbad0c056016aff": "af68aca7e223f01873c8fad311774534",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/a03c8f908dd8adb94a43807887fca9f9afbfa5": "8f21c149e6aaa42e4ab0fcf5232187bc",
".git/objects/9d/f08d730e8c3e53282d013c5b88db50d40c995a": "8dec05089038934f998474ae7a69364c",
".git/objects/b2/0bec008fb0d23f76b4da09f844d7da001226b8": "632ab7a15ad678a98f361a10543a98f8",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/ac/9b178c54c43d1d16312dc4599bfb0a61ed3705": "52e0fb31532bf64802457071bea598db",
".git/objects/bb/243db3ca2ce925b84b2f2d493b164bc7a4dee3": "8e1c3d7223bdb8fbced37dad6f43de55",
".git/objects/be/ca2b4f7f1ebe9b713fff09c1ff26f468252b4c": "ae63165a282a0c844e8e149938f8fb95",
".git/objects/be/2effc9310a65d9f3954fb86094615c916882c1": "012f7a6f873adeac194a37332190cc9a",
".git/objects/b3/3d29c79a76e02856929b60c93cdcfbd0308920": "965bd885f413f72b97dedf72421c9c36",
".git/objects/df/feb99b8faee85b266f8dedf1ca0d251679bd46": "eafb940a3545568611182fe206f8ed59",
".git/objects/df/ac5fa9ac277b41bb115aaa7cb7e1e99d509c76": "398baecf5aaa7b36a69d25bbe06352bf",
".git/objects/da/66099511ad1152ecb6bdc465f1568a6cdaca48": "5370db6be2d6524e3bb7c09c116bbeb8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d1/4b2f88e31e6e429407bc0da4488a8706637122": "5e49b3bd7f039d7a45c65fbe5e880581",
".git/objects/d1/68b415335f04dd76a3118bba7d4e849e14b679": "067b1e221e276ae5620210b9f919cd42",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f70415100148894e276978fbb1c0095ed13962": "a380b38fca5c9c89161e43d741328cbc",
".git/objects/d6/bdd38fe4af8afaafba2cd883badfae3cc0564e": "81c03693417fa64b894aa7359045aca4",
".git/objects/d6/b4f5a04d2e19e9d6c4bf4041173d0d2c521002": "220f4f651bd6890ec6ab522934157ecf",
".git/objects/bc/32b983f997904785a2e4b7e02cf762e40ad337": "381f232248baf1cb439aef29577e69c0",
".git/objects/e5/549eb2e74505a3af2cadb9892f65620338d5a6": "bc3534ec9a61b5383a6ebeb51d28015f",
".git/objects/e2/5cc9230a0fbb1e3cbc425eca03dea97fb91d71": "cf43e10edd4753a4bef65aab3b55af78",
".git/objects/f3/758a40ddc9f928739405a958503e7f5560a101": "10e19efda288733c7f8603173d17c9a0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/5008a09c3074cb91ffe4e7b2f341eda1bb4607": "7f2cb89e5df0159f1aba18b84f57503e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7f7fc65d1d038254216f0871624911ba36993f": "56456fe66321da0171cfdc518910d20d",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/5167613c3f061a18b5e6f929f5bff2ada5ae3e": "6065185539c27534fe9444924d9d56cf",
".git/objects/fd/d05e2ded773de55e7e0b14917049c2260cc548": "e9b7720ea3d198b01cf3bd1d35352c9c",
".git/objects/fd/ec71d7fd06a62eab3dedc2cb29ba6e49942810": "058a545d45c1051e4b57835a8a925a3c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3ca63112d530932d6716d5a07f0d87f5db1851": "2da121075394478d7f086b10f3d3f9fd",
".git/objects/f5/89128ec30799e667309da202c06670781b7d48": "a45d9234ff431ab8f13de5ea95ef81fb",
".git/objects/f5/d4f1c13213a4f5fefaf054ab79e030778851e3": "0e4f4ef1809bd47a7b8cdba45779c6f7",
".git/objects/cf/6b51d06330cb564419d1a003bfa6556d21206a": "d69a5af35b42c31667590b0530b99b57",
".git/objects/fe/5a426b546bb7e302c654ade6bf04ac3ffe79cf": "a28f1400deab09c0bcc049dbc34a7a3e",
".git/objects/ed/89a52bf2f1eeeec5936b96ae1032c0e4c17bb1": "3610aa60ae5f1eeaf0d94b3f9f84e013",
".git/objects/c1/138304b504421a67f20ae97436b1ec3f8f6b67": "4641f0fe02928660092ed6a273cf7d51",
".git/objects/c1/71a7f8dce2c29d1d73aa6c26cf8a56193ba96a": "fe35cdedc771929525af10a831325c3b",
".git/objects/c6/3e5aede2b24906810325a9067056bb359f5078": "be77889085950d686a6dc1f96bc150ed",
".git/objects/ec/87b39c4896fa9af72c3d6f20ee3abd4aa2d887": "be7e82959d54cdb7051e8fac4b4ac75b",
".git/objects/27/e819fa417a5670b1e5c578dbe765c1546edbd3": "44f018da4bc5def9783e551dc594218a",
".git/objects/4b/fbe316fde0e76f107125a516828d3e4b5c24c4": "63434d678e020ae3431eecbf40d8b315",
".git/objects/4b/f8a2c834a592a2d98c8526ae68e37dbd7521dc": "a093a5593684dfdb18ada4cb61680806",
".git/objects/11/9c25398bb16f6c9d489170e34348f3f93d8e7c": "67b498d09f88bc6f287b9febe626b44d",
".git/objects/11/12d5705d38af9d8624337642bed2b93bed2ceb": "f851e472cb2154cf1bafedd5fc341d22",
".git/objects/7d/f1b5fea1f4ab199744f60b4f7b251de2c5d80b": "ebf737fac363a04be7d96054160421df",
".git/objects/7c/c9e84b6ab9053a4579af16015bba674fa2e59d": "74e803e8c1809eee54dbc47314eb3c85",
".git/objects/42/42ed3b04c5935d0614d9b898041db52bd7f6e7": "0fb6e607ea32558247b766d26b13be31",
".git/objects/45/e1aae98f61fb07c758d208a1860ff4d3755a4d": "eb449c144e4a7908707ae6b44988bcf4",
".git/objects/1f/2c2c212785f0dfa219f625475a8d850b9c15f7": "89de3d8fe2913149f70a0485c83dd634",
".git/objects/87/c046b8e15401e3a315b82801b17c5241e9fc1c": "d263160614d9950532ab801088cbf067",
".git/objects/1a/a828c7dd32026d57ee80249eb21a88944d3af1": "ae48a226671c23750830ea8f3c6eb529",
".git/objects/17/942abcdebe1c9d92a6625b44cb404e915bfc5e": "679a452965faf2535098831b3213dafd",
".git/objects/17/5414762090bd1b78d2d26a43b9f9c2009727c3": "8e886ae816a4f8d5a10cbe4feebb70ce",
".git/objects/7b/437fd7ba0e0e1576540ee712b203ad4f5be3bd": "f915351649bfbe69b6351aabb87582a7",
".git/objects/7b/21b599375ce0a7e56fb6bdd241d82be223f527": "b6b2ad9ed6a76adf7d8c4e59e9c1a40b",
".git/objects/8f/af98092ee7f79ba35c4c992912529385c23c9c": "ff8677c7b6cc1065f29a57af9588031e",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c0cfffb45d756bfbf8ac51cffa4bd993934010": "53e338a646c95b0523be7809fcd4c7b1",
".git/objects/10/7b18f73ba1edd552ae84a2778e5eb1562b9706": "16c28538cd4ac6891296e3a2c9725c1e",
".git/objects/19/6304234f39d326ccabba11fc40e4c8cc86a91e": "87577f4085d1fd67828a1ad1226b8d97",
".git/objects/19/1f945b9ca1270c3776e57f7f80d2fa3e21c0bd": "a62dc3d7b2d7f88c2d422dad7140da1d",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/cd9d6c1a8ed6d1c3e781855bc3b8756b6ee57c": "db82620f2dd5284620df698ebd9631ac",
".git/objects/75/3e53b65fce63deb909a92bc0fde9f4fddca59c": "26da0b5e864d678fd02f05a745ff8f88",
".git/objects/81/d269ed64d3d920f50f6da7635e87399916d108": "cbb87d1a5de14422a46c34d9feb49865",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/44/e198be3094927b128405401f1102683a0605b5": "1cc55afa99b5c3623f2bd5b2a1b590da",
".git/objects/43/b222a60a5428585a01c5366a52346147484aa0": "a36b1729ce7c9dfced415d34dc18f309",
".git/objects/43/0ff44824ea3369efb1da57e48b59eea5590f0b": "b075c21cc1e3ee152a09d3cf2567a122",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8adc4a840c63bf2ba8a977fa22943b03052fa6": "0426b8ad01d554a5a3c3856007b11e0e",
".git/objects/9f/abbf83a5cceb133de1f6181e349e1cf3c837b1": "d193b4136aa4e91493368b5dcb13d0e2",
".git/objects/6b/64ae613587986b89742e9ba55a0bba08a6b732": "b44505349c2b81d91eeb009ea9e59084",
".git/objects/00/e917c5f9f1f25f8d71ad85aacc21ecec843216": "186327bc082633fe3bafa3f76f54aa6c",
".git/objects/6e/3582d34ee34bbf89a8b4f7d4f52dc40b47e8f8": "08a706c1e46f661ec9892b9f4e6a3393",
".git/objects/5c/658cb9da97ff5db607d37ec00bb1c4b8fa4917": "5e034f696ffd5c00a5cdbd33d5643461",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/f7184d88150114c406f11458bfc120a859e24f": "542cd298f6b5478d3ab2e9e945a7737a",
".git/objects/09/506394e365f9ad0e8fc6c93a3b36e47f106686": "b43017391ee90edf64d7d8b96f6c416e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/6957f3ca18c67fcc2b0c750cd86c94226da1f5": "b8d34d371b1834b1e3cb63bae0c8134c",
".git/objects/96/9b474d1273ee573c42dddf5f769c0cf9907aad": "f06f66451bb7b5af18c2ded852c196cd",
".git/objects/3a/85e00c27c92352e2f4d851966b3fa414669853": "4d93cae860625bcc4eda8832f8007d01",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/3f/fc5691375ed9c031b468177de2f62766c58161": "b019526d0be9c5e502de8bc4d8d1f40b",
".git/objects/5e/ccf6879dc6a1f52ca5adae1b072da5bfcb9a5f": "d1e9641ec1b2b25a033bb40b31af274a",
".git/objects/37/6f50741959030449e24de11a97f06da7b1f707": "88ca52b365e76e37aafffac3efea9838",
".git/objects/37/edaeaa606756cf3fe81b48d4125cbfef0e050f": "97264d7466b08df4f15ac6eca27777a6",
".git/objects/08/846453160e8d23f0792cd21e483cf1ec281afa": "71d1c730b3c1964c6de25d3f9e9da515",
".git/objects/08/8b66cefd63f329add4deabbe3d923f574ada13": "acc50cc5b54f845a12b458f3cfa3e5d8",
".git/objects/6c/daf4934ccf1f45e8a72c695034a97cfa429e40": "29fc3cdf3757b9e10f9c3d3b41cf5723",
".git/objects/6c/94219811e9ca4424b1f916a4df09c82c9a3d1e": "c5bf488f2daf03871b1ccb7709db9fa8",
".git/objects/99/e7ee449adb4d1b63404aa059e036159141967d": "4e4a28fa1360613bb004856301d66582",
".git/objects/99/439098b759d3d41a59a2523aeb3b6180be418a": "5781190e1e7845065fed50e1fa76cadf",
".git/objects/52/fd528199ae76f6d1fbad65925058668f288292": "b32f6b279d1e8e12727d40ce67ae7110",
".git/objects/0a/cd661e18510938c7104b48d445d4c5469bb627": "f27922181a96f0442a674a68a1932230",
".git/objects/0a/df4887d1f31ca46bc473f997ce6488e2113450": "5538f46dcddcac2a43fd44b38bfd5c31",
".git/objects/90/8debd66d74b3c7e43faee0185df9e0497ed6f5": "05a3b33bf45894083cfb52eaa97f9158",
".git/objects/90/92009b0272ac961158972950931a16bc710323": "24f45b2f867ca59d2dd137f96e9a3c12",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/898d5b8fb546c2d3168a238c40dc91ceed2a48": "46a0ce531fac77c290d8aac9728da435",
".git/objects/a7/0d7c7bf8d6aeefc9348f00ac3c042b08af9b1c": "884f55a54b7cc2bcbb2ea3c967486a84",
".git/objects/b8/401bb9a30e8675ed83ff5dcb442a422084e9a6": "00484ced0722a997bd6514bfd74c27a1",
".git/objects/b1/c550f25c297b908dae4ec04672e4542d111daf": "26c2edd98f4f2ee4336cc299557be4df",
".git/objects/b1/9aa92b8a82cd6810afbea56e2b80ff53599802": "b61c6dcf9dff4995457045a5b13f40a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/ad32f9e22c3506a36b185ea5362c8feedf1403": "f61e3e27d3160dd536f2b32ea54fb2a8",
".git/objects/de/085642f65c1117a62f0a670cca5e0ce52f4c2a": "0b9b333679d3236b6b8e17812caf7a8f",
".git/objects/b0/bed0f4fde87f7510214644e126b5bbb447ca3b": "b6cee5599d984c737eb17d1059895c5c",
".git/objects/a6/bc382439b751db1e1cf4ec08758e640063f866": "f4b372eead5d82b9d24c810a1d9de5d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/5a4432ed40d439414d853e87e1b66c280a6442": "153dfbb6074e71bc3899347d4401b664",
".git/objects/c4/8aa07bc5181cd0846acd19304dd1cf21183e0e": "4d3e26fc2be4a26dbdc7c6b313487686",
".git/objects/e1/eb2dda58cba3d04327b8c0aa4f7ae3b29d5800": "7daaf59aae784ba4e1f2872fbcb60451",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/f9/8d5f3f81893fe21c361ed85f7c33d3fa6bed3b": "dc9721050ffbcc9d83a1ef2dd9e11f38",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/f7/14a514d94e495095e2f1e525a341eade187c17": "ca0d4350dcdad8026382089554e0448e",
".git/objects/e8/93b17c72215524c08b5e4f40e9ad8c340356f9": "78625b6c5e144af6390cf46b5e11d90d",
".git/objects/fa/b242db8d5d6618682cca7eee5af0f766834b5f": "3dcc982773770f7690f347185eb05dec",
".git/objects/ff/fc91bd3be66660df6c36eabd230223c901f51c": "8d1fbf65afa4d9cc14c55358105bbf39",
".git/objects/c5/7372b50a35d3518404729779cd57785f5776c1": "97f0b4581733ea9801eb3186136785d7",
".git/objects/c2/116b644df5fa474b835fe125b307a73cca0854": "3ae9960197618c4a3860e3960b13ca5d",
".git/objects/c2/d1eeb49b7676d01e8f58ad94e389f0c18be30f": "bd38f7e2441d733f2369c4418ead1194",
".git/objects/c2/61994462ca699cfd45a1cbe57ab43dae5c0aca": "754b39fb35a68159aac4650de633689f",
".git/objects/c2/ceef5433382daaf90ef26ae1bd9d69a28fd435": "25ce3e9cda9a727fa933e90da635f0bb",
".git/objects/f1/44d50a892539ac2b9d493749158409b9edf71c": "f82614df4e0341273b01db0c67722638",
".git/objects/e7/a9c15ae04cd135d2b89e8d2eeb5a1823c813e6": "932a8c52277737cc0d5ba5696debd810",
".git/objects/cb/d3ba81af515450ae4a1d209116b76d9122265f": "d6b882ea5d6c7eccb4e67d1d24884d42",
".git/objects/e0/f2f496bd64f40826603cf354231b72c0b4eb67": "45bdabe9c350aef1f71a2f51cad135d8",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/79/3c1c363d747b8d55cd7ff661cc307fa52e2cc0": "62b6522fbd90e667c3b39b5ee5f89621",
".git/objects/2d/0ed2d5a567c2fcb237878fb76f12cddbaa6da3": "a01ba65d2fd26f08118acfb996b31eaa",
".git/objects/41/295c6d2a4060571edb3665b4e730cebd976168": "e4e7fc16cd7e4871f0862fbbe95b2bfd",
".git/objects/41/7ac566a0c9609adf9d5602450a739c63af0537": "f60c49d531c7b67b762592aa87f11848",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/1e/1e65fc33427bceed15b4f17d61d513d9d7da36": "0f13649be4b42a91c3267e40502454c8",
".git/objects/84/b25304c7bf9ebfc21154dad8d81e71e278be97": "6d45a0d166f77f4b1bce729b0816c367",
".git/objects/8d/51e1d9e418eb865aec22cbee870b80a7a93d05": "cfa6cc3b065b84b52cb3176edffef3ee",
".git/objects/85/b0d8468cdb68e82b2eac00ccc77f14ec8cc7e7": "fed45376263e6dd78bba691c9148fc52",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/36e6927b090ccbad7b2df0d83312e9d17e1047": "60770a1bf4accedb95a044b351301e5a",
".git/objects/76/509edd143f8b1aa033893ba75b085b37cb3264": "dba6af618e949a1377c300bca05a3242",
".git/objects/40/29ba4669010caba324f7e064c5499ec7b66933": "6d53e10055e79a164ac763593e4f4189",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/73834754bac4bdcea503e50effec3150612c7a": "9b3aadfef13302e97bb118a4769d17ce",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/8b/4407b4eb8d02badb3d536ae1c9921476486bb8": "cda068be71b59f9dab6e73f2aacd5228",
".git/objects/7a/4a5767754b8b23054ebcbc5601a5dd0d1811c5": "a2fecac2ac0033f809ae90e4383abd91",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "67e63c8126bc06345f586b533430fa50",
".git/logs/refs/heads/main": "67e63c8126bc06345f586b533430fa50",
".git/logs/refs/remotes/origin/main": "70ead5a7d52cf5d726424d884433883e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5ce61bcd95cfa1bab266a99dfaf7baf5",
".git/refs/remotes/origin/main": "5ce61bcd95cfa1bab266a99dfaf7baf5",
".git/index": "44e3eeb570654095aa19713e411ee73a",
".git/COMMIT_EDITMSG": "82c4de7ef50ad114194063e1d47d445c",
".git/FETCH_HEAD": "b35e430ffdb392f575d16fc4ca42f124",
".git/sourcetreeconfig": "2110eb16dabfe8723f1f76be89dbc292",
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
