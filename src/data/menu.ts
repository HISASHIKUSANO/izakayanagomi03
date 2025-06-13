export const menu = {
  drinks: [
    { name: '生ビール', price: 550 },
    { name: '瓶ビール', price: 650 },
    { name: '芋・麦焼酎（各グラス）', price: 500 },
    { name: '梅酒', price: 500 },
    { name: '日本酒', price: 500 },
    { name: '冷酒', price: 700 },
    { name: 'ハイボール', price: 550 },
    { name: 'トマト酎ハイ', price: 500 },
    {
      name: '酎ハイ各種',
      price: 500,
      note: 'レモン／ライム／ピーチ／梅／カシス／カルピス／青リンゴ',
    },
    { name: 'カルピス', price: 350, category: 'soft' },
    { name: 'オレンジジュース', price: 350, category: 'soft' },
    { name: 'コーラ', price: 350, category: 'soft' },
    { name: 'ジンジャーエール', price: 350, category: 'soft' },
    { name: 'ウーロン茶', price: 250, category: 'soft' },
  ],
  fried: [
    { name: '揚げ出し豆腐', price: 380 },
    { name: 'フライドポテト', price: 380 },
    { name: 'エビフライ', price: 600 },
    { name: 'エビ・タコ・イカ天', price: 480 },
    { name: 'ホタテ貝柱天', price: 780 },
    { name: 'みの天', price: 680 },
    { name: '串カツ（2本）', price: 480 },
    { name: 'カマンベールフライ', price: 480 },
    { name: 'れんこんはさみ揚げ', price: 480 },
    { name: '鶏からあげ', price: 580 },
    { name: 'チキン南蛮', price: 580 },
    { name: '軟骨からあげ', price: 480 },
    { name: 'ゴボウスティック', price: 380 },
  ],
  salad: [
    { name: '野菜サラダ', price: 350 },
    { name: '生ハムサラダ', price: 450 },
    { name: 'シーザーサラダ', price: 500 },
    { name: 'アボカド&生ハム', price: 680 },
  ],
  special: [
    { name: '馬刺し', price: 980 },
    { name: '赤どりタタキ', price: 880 },
    { name: 'マグロ山かけ', price: 780 },
    { name: 'マグロ刺身', price: 680 },
    { name: 'サーモン刺身', price: 680 },
    { name: 'ホタテ貝柱刺身', price: 680 },
    { name: 'ホタテ貝柱ホイル焼', price: 880 },
    { name: '小いわし天ぷら', price: 380 },
    { name: 'ホタルいか', price: 480 },
    { name: 'いか納豆', price: 580 },
    { name: '手造りハンバーグ', price: 680 },
    { name: 'テバ中', price: 580 },
    { name: '尾道ラーメン', price: 880 },
    { name: 'ラーメン（塩／みそ）', price: 880 },
  ],
} as const;

type Dish = { name: string; price: number; note?: string; category?: string };
export type MenuData = typeof menu;
export type Category = keyof MenuData;
export type MenuItem = Dish;
