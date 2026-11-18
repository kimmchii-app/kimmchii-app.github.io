// 角色清單：照《菜園廣播電台.xlsx》的順序產生。新增角色就在陣列裡多加一行。
//   name   角色名稱
//   adult  成人分級：1 是成人向（進角色頁前會先跳年齡提醒），0 是普通向
//   photos 證件照路徑清單，第一張當卡片封面；可以放好幾張，角色頁能左右切換。留空 [] 會顯示嫩芽預設圖
//   age    年齡    ┐
//   height 身高    ├ 留空會顯示「尚未填寫」
//   job    職業    ┘
//   json   JSON 角色卡：放在 cards/ 資料夾的檔案路徑（例如 "cards/江懷晝.json"），
//          或 Google 雲端硬碟的分享連結；兩種點了都會直接下載檔案
//   caveduck 鴨達版（Caveduck）燈箱的內容檔路徑：點了會開燈箱，讓使用者逐欄複製
//   drive  雲端硬碟連結：點了在新分頁開啟
//   app    卿卿我我 App 版的角色連結：點了在新分頁開啟
//   poster 宣傳長海報的 HTML 檔路徑（建議放在 posters/ 資料夾），留空會顯示「宣傳海報還沒放上來」
//   stories 可視故事清單（可省略），例如 "stories": [{"title": "故事標題", "file": "stories/櫆向-1.txt"}]。
//          每篇一顆按鈕，點了開燈箱閱讀；檔案是 UTF-8 純文字，空一行算一段。沒有故事會顯示「尚未提供」
//          加上 "spoiler": true 會顯示爆雷標籤，打開時先跳預警，按「繼續閱讀」才看得到內文
window.CHARACTERS = [
  {"name": "十二殺：費美洛斯屠宰場", "adult": 1, "photos": ["images/characters/十二殺：費美洛斯屠宰場-1.jpg", "images/characters/十二殺：費美洛斯屠宰場-2.jpg", "images/characters/十二殺：費美洛斯屠宰場-3.jpg", "images/characters/十二殺：費美洛斯屠宰場-4.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/mbdm6imc", "poster": ""},
  {"name": "轉生！成為魔獸之母", "adult": 1, "photos": ["images/characters/轉生！成為魔獸之母-1.jpg", "images/characters/轉生！成為魔獸之母-2.jpg", "images/characters/轉生！成為魔獸之母-3.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/xj2gr6r1", "poster": ""},
  {"name": "月華社區：居家好ㄍㄟˋ蜜", "adult": 1, "photos": ["images/characters/月華社區：居家好ㄍㄟˋ蜜-1.jpg", "images/characters/月華社區：居家好ㄍㄟˋ蜜-2.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jhm7mfwi", "poster": ""},
  {"name": "金苹果夜總會", "adult": 1, "photos": ["images/characters/金苹果夜總會-1.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/kl2esfle", "poster": ""},
  {"name": "江懷晝", "adult": 1, "photos": ["images/characters/江懷晝-2.jpg", "images/characters/江懷晝-1.jpg", "images/characters/江懷晝-3.jpg", "images/characters/江懷晝-4.jpg", "images/characters/江懷晝-5.jpg"], "age": "50 歲", "height": "183 cm", "job": "大港漁會會長／「鐵鉤」副手", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/56d32j75", "poster": "posters/江懷晝.html", "stories": [{"title": "小鯨魚", "file": "stories/江懷晝-小鯨魚.txt"}]},
  {"name": "櫆向", "adult": 1, "photos": ["images/characters/櫆向-7.jpg", "images/characters/櫆向-1.jpg", "images/characters/櫆向-2.jpg", "images/characters/櫆向-3.jpg", "images/characters/櫆向-4.jpg", "images/characters/櫆向-5.jpg", "images/characters/櫆向-6.jpg"], "age": "28 歲", "height": "179 cm", "job": "黑道「狍樓」幹部", "json": "cards/櫆向.json", "caveduck": "cards/櫆向-鴨達版.json", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/dkyouijw", "poster": "posters/櫆向.html", "stories": [{"title": "說謊的代價", "file": "stories/櫆向-說謊的代價.txt"}, {"title": "說謊的真相", "file": "stories/櫆向-說謊的真相.txt", "spoiler": true}, {"title": "消失的三週", "file": "stories/櫆向-消失的三週.txt"}]},
  {"name": "言鐶舂", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/2mby6bmi", "poster": ""},
  {"name": "瑟雷西", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/n2my8l01", "poster": ""},
  {"name": "不赦火", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/4dcwz2vr", "poster": ""},
  {"name": "祁楝深", "adult": 1, "photos": ["images/characters/祁楝深-1.jpg", "images/characters/祁楝深-2.jpg", "images/characters/祁楝深-3.jpg", "images/characters/祁楝深-4.jpg", "images/characters/祁楝深-5.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/ntjkttvi", "poster": ""},
  {"name": "舒於律", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/vob3vpim", "poster": ""},
  {"name": "畫作之鬼", "adult": 1, "photos": ["images/characters/畫作之鬼-1.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/6wb9pd7v", "poster": ""},
  {"name": "衣櫃裡的小怪物", "adult": 1, "photos": ["images/characters/衣櫃裡的小怪物-1.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jpmou6jy", "poster": ""},
  {"name": "床底下的小怪物", "adult": 1, "photos": ["images/characters/床底下的小怪物-1.jpg"], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/1qbaqrz4", "poster": ""},
  {"name": "曲汨哲", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/hzbnbt92", "poster": ""},
  {"name": "凱吾爾", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/i5dolf57", "poster": ""},
  {"name": "海利波頓(二創)", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/0jfk9zx0", "poster": ""},
  {"name": "彼西多斯", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/s798r4u3", "poster": ""},
  {"name": "小啾啾", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/c019jluj", "poster": ""},
  {"name": "覡", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/sf4ei7mg", "poster": ""},
  {"name": "瓊斯", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/n6ln57i5", "poster": ""},
  {"name": "萊卡", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/yh5z4vyt", "poster": ""},
  {"name": "尚特", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/s623hrk5", "poster": ""},
  {"name": "桁華飛", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/qlc8lyfi", "poster": ""},
  {"name": "鶴迴天", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/u1bdofvz", "poster": ""},
  {"name": "霍華德", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/t8ro5mxj", "poster": ""},
  {"name": "蒣凌", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/rof49sef", "poster": ""},
  {"name": "翡凌鋝", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/yx6m5hf0", "poster": ""},
  {"name": "斐爾沁", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jnkt4egr", "poster": ""},
  {"name": "雷伊凡", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/41g3gnxn", "poster": ""},
  {"name": "江道裁", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/tbon8j7g", "poster": ""},
  {"name": "烈常懿", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/pxa5qw6k", "poster": ""},
  {"name": "媽咪的遺產", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/r77rbzfa", "poster": ""},
  {"name": "百目鬼慶次郎", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/prfemg68", "poster": ""},
  {"name": "May Rock", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/o36zze5u", "poster": ""},
  {"name": "星期一拯救計劃", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/csrze3w0", "poster": ""},
  {"name": "餘燼(二創)", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/je4r40ti", "poster": ""},
  {"name": "檜長卿", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/485qt26n", "poster": ""},
  {"name": "伽勒斯", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/dho3ovjr", "poster": ""},
  {"name": "夏至", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/lw7iye9j", "poster": ""},
  {"name": "相模雅智", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/fcd1htll", "poster": ""},
  {"name": "瞿劣禺", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/1qltc24w", "poster": ""},
  {"name": "萬裁", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/g6wm820c", "poster": ""},
  {"name": "闞褶旎", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jlxosdrc", "poster": ""},
  {"name": "車鴆", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/fy0lbaj2", "poster": ""},
  {"name": "貝勒居", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/b6f9l12e", "poster": ""},
  {"name": "花郎", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/tn5z5na2", "poster": ""},
  {"name": "琊㕞", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/it6webz1", "poster": ""},
  {"name": "閡葈璪", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/9wmuo6b4", "poster": ""},
  {"name": "梅虔了", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/zzv6ujsz", "poster": ""},
  {"name": "戀上交換日記", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/77a9172j", "poster": ""},
  {"name": "菇菇山", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/avtdukh4", "poster": ""},
  {"name": "常夏捉妖隊", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/vm874muk", "poster": ""},
  {"name": "茶歐（官方轉私）", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/ieachq8m", "poster": ""},
  {"name": "約翰·道林", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/diskkg5o", "poster": ""},
  {"name": "蘭", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/wfpxbfir", "poster": ""},
  {"name": "逃離絕境", "adult": 1, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "", "poster": ""},
  {"name": "愛汪達", "adult": 0, "photos": [], "age": "", "height": "", "job": "", "json": "", "caveduck": "", "drive": "", "app": "", "poster": ""}
];
