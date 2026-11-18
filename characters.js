// 角色清單：照《菜園廣播電台.xlsx》的順序產生。新增角色就在陣列裡多加一行。
//   name   角色名稱
//   photos 證件照路徑清單，第一張當卡片封面；可以放好幾張，角色頁能左右切換。留空 [] 會顯示嫩芽預設圖
//   age    年齡    ┐
//   height 身高    ├ 留空會顯示「尚未填寫」
//   job    職業    ┘
//   json   JSON 角色卡：放在 cards/ 資料夾的檔案路徑（例如 "cards/江懷晝.json"），
//          或 Google 雲端硬碟的分享連結；兩種點了都會直接下載檔案
//   drive  雲端硬碟連結：點了在新分頁開啟
//   app    卿卿我我 App 版的角色連結：點了在新分頁開啟
//   poster 宣傳長海報的 HTML 檔路徑（建議放在 posters/ 資料夾），留空會顯示「宣傳海報還沒放上來」
window.CHARACTERS = [
  {"name": "十二殺：費美洛斯屠宰場", "photos": ["images/characters/十二殺：費美洛斯屠宰場-1.jpg", "images/characters/十二殺：費美洛斯屠宰場-2.jpg", "images/characters/十二殺：費美洛斯屠宰場-3.jpg", "images/characters/十二殺：費美洛斯屠宰場-4.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/mbdm6imc", "poster": ""},
  {"name": "轉生！成為魔獸之母", "photos": ["images/characters/轉生！成為魔獸之母-1.jpg", "images/characters/轉生！成為魔獸之母-2.jpg", "images/characters/轉生！成為魔獸之母-3.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/xj2gr6r1", "poster": ""},
  {"name": "月華社區：居家好ㄍㄟˋ蜜", "photos": ["images/characters/月華社區：居家好ㄍㄟˋ蜜-1.jpg", "images/characters/月華社區：居家好ㄍㄟˋ蜜-2.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jhm7mfwi", "poster": ""},
  {"name": "金苹果夜總會", "photos": ["images/characters/金苹果夜總會-1.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/kl2esfle", "poster": ""},
  {"name": "江懷晝", "photos": ["images/characters/江懷晝-1.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/56d32j75", "poster": ""},
  {"name": "櫆向", "photos": ["images/characters/櫆向-7.jpg", "images/characters/櫆向-1.jpg", "images/characters/櫆向-2.jpg", "images/characters/櫆向-3.jpg", "images/characters/櫆向-4.jpg", "images/characters/櫆向-5.jpg", "images/characters/櫆向-6.jpg"], "age": "", "height": "179 cm", "job": "黑道「狍樓」幹部", "json": "cards/櫆向.json", "drive": "", "app": "https://abr.ge/zzyzfas", "poster": "posters/櫆向.html"},
  {"name": "言鐶舂", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/2mby6bmi", "poster": ""},
  {"name": "瑟雷西", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/n2my8l01", "poster": ""},
  {"name": "不赦火", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/4dcwz2vr", "poster": ""},
  {"name": "祁楝深", "photos": ["images/characters/祁楝深-1.jpg", "images/characters/祁楝深-2.jpg", "images/characters/祁楝深-3.jpg", "images/characters/祁楝深-4.jpg", "images/characters/祁楝深-5.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/ntjkttvi", "poster": ""},
  {"name": "舒於律", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/vob3vpim", "poster": ""},
  {"name": "畫作之鬼", "photos": ["images/characters/畫作之鬼-1.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/6wb9pd7v", "poster": ""},
  {"name": "衣櫃裡的小怪物", "photos": ["images/characters/衣櫃裡的小怪物-1.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jpmou6jy", "poster": ""},
  {"name": "床底下的小怪物", "photos": ["images/characters/床底下的小怪物-1.jpg"], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/1qbaqrz4", "poster": ""},
  {"name": "曲汨哲", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/hzbnbt92", "poster": ""},
  {"name": "凱吾爾", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/i5dolf57", "poster": ""},
  {"name": "海利波頓(二創)", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/0jfk9zx0", "poster": ""},
  {"name": "彼西多斯", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/s798r4u3", "poster": ""},
  {"name": "小啾啾", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/c019jluj", "poster": ""},
  {"name": "覡", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/sf4ei7mg", "poster": ""},
  {"name": "瓊斯", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/n6ln57i5", "poster": ""},
  {"name": "萊卡", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/yh5z4vyt", "poster": ""},
  {"name": "尚特", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/s623hrk5", "poster": ""},
  {"name": "桁華飛", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/qlc8lyfi", "poster": ""},
  {"name": "鶴迴天", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/u1bdofvz", "poster": ""},
  {"name": "霍華德", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/t8ro5mxj", "poster": ""},
  {"name": "蒣凌", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/rof49sef", "poster": ""},
  {"name": "翡凌鋝", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/yx6m5hf0", "poster": ""},
  {"name": "斐爾沁", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jnkt4egr", "poster": ""},
  {"name": "雷伊凡", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/41g3gnxn", "poster": ""},
  {"name": "江道裁", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/tbon8j7g", "poster": ""},
  {"name": "烈常懿", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/pxa5qw6k", "poster": ""},
  {"name": "媽咪的遺產", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/r77rbzfa", "poster": ""},
  {"name": "百目鬼慶次郎", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/prfemg68", "poster": ""},
  {"name": "May Rock", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/o36zze5u", "poster": ""},
  {"name": "星期一拯救計劃", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/csrze3w0", "poster": ""},
  {"name": "餘燼(二創)", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/je4r40ti", "poster": ""},
  {"name": "檜長卿", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/485qt26n", "poster": ""},
  {"name": "伽勒斯", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/dho3ovjr", "poster": ""},
  {"name": "夏至", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/lw7iye9j", "poster": ""},
  {"name": "相模雅智", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/fcd1htll", "poster": ""},
  {"name": "瞿劣禺", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/1qltc24w", "poster": ""},
  {"name": "萬裁", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/g6wm820c", "poster": ""},
  {"name": "闞褶旎", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/jlxosdrc", "poster": ""},
  {"name": "車鴆", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/fy0lbaj2", "poster": ""},
  {"name": "貝勒居", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/b6f9l12e", "poster": ""},
  {"name": "花郎", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/tn5z5na2", "poster": ""},
  {"name": "琊㕞", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/it6webz1", "poster": ""},
  {"name": "閡葈璪", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/9wmuo6b4", "poster": ""},
  {"name": "梅虔了", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/zzv6ujsz", "poster": ""},
  {"name": "戀上交換日記", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/77a9172j", "poster": ""},
  {"name": "菇菇山", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/avtdukh4", "poster": ""},
  {"name": "常夏捉妖隊", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/vm874muk", "poster": ""},
  {"name": "茶歐（官方轉私）", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/ieachq8m", "poster": ""},
  {"name": "約翰·道林", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/diskkg5o", "poster": ""},
  {"name": "蘭", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "https://loveydovey.onelink.me/vs4G/wfpxbfir", "poster": ""},
  {"name": "逃離絕境", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "", "poster": ""},
  {"name": "愛汪達", "photos": [], "age": "", "height": "", "job": "", "json": "", "drive": "", "app": "", "poster": ""}
];
