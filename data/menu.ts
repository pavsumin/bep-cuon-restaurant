export type Locale = 'en' | 'vn' | 'kr' | 'cn' | 'jp'

export interface Dish {
	id: string
	image: string
	price: string
	translations: {
		[key in Locale]: {
			name: string
			description: string
		}
	}
}

export interface Category {
	id: string
	title: string
	dishes: Dish[]
}

export const menuData: Category[] = [
	// 🥗 SALADS
	{
		id: 'salads',
		title: 'Salads',
		dishes: [
			{
				id: 'goi-ngo-sen',
				image: '/menu/goi-ngo-sen.jpg',
				price: '99.000đ',
				translations: {
					en: {
						name: 'Lotus Stem Salad with Pork & Shrimp',
						description:
							'Fresh lotus stem mixed with herbs, pork and shrimp, served with crispy shrimp crackers.',
					},
					vn: {
						name: 'Gỏi Ngó Sen Tôm Thịt',
						description: 'Ngó sen trộn tôm thịt, rau thơm và bánh phồng tôm.',
					},
					kr: {
						name: '연근 샐러드',
						description: '연근과 돼지고기, 새우를 곁들인 상큼한 샐러드.',
					},
					cn: {
						name: '莲藕鲜虾猪肉沙拉',
						description: '莲藕搭配虾和猪肉，配虾片。',
					},
					jp: {
						name: '蓮根と豚肉と海老のサラダ',
						description: '蓮根に豚肉と海老を合わせた爽やかなサラダ。',
					},
				},
			},

			{
				id: 'goi-hoa-chuoi',
				image: '/menu/goi-hoa-chuoi.jpg',
				price: '99.000đ',
				translations: {
					en: {
						name: 'Banana Flower Salad',
						description:
							'Mixed banana flower with pork and shrimp, topped with Vietnamese herbs.',
					},
					vn: {
						name: 'Gỏi Hoa Chuối Tôm Thịt',
						description: 'Hoa chuối trộn tôm thịt và rau thơm đặc trưng.',
					},
					kr: {
						name: '바나나 꽃 샐러드',
						description: '바나나 꽃과 돼지고기, 새우를 곁들인 샐러드.',
					},
					cn: {
						name: '香蕉花沙拉',
						description: '香蕉花配猪肉和虾。',
					},
					jp: {
						name: 'バナナの花サラダ',
						description: 'バナナの花と豚肉、海老のサラダ。',
					},
				},
			},

			{
				id: 'goi-ga-chua-cay',
				image: '/menu/goi-ga.jpg',
				price: '135.000đ',
				translations: {
					en: {
						name: 'Spicy & Sour Chicken Salad',
						description:
							'Shredded chicken mixed with herbs in a tangy Vietnamese dressing.',
					},
					vn: {
						name: 'Gỏi Gà Chua Cay',
						description: 'Gà xé trộn rau thơm và nước mắm chua cay.',
					},
					kr: {
						name: '매콤한 닭고기 샐러드',
						description: '닭고기와 허브를 곁들인 새콤 매콤 샐러드.',
					},
					cn: {
						name: '酸辣鸡肉沙拉',
						description: '鸡肉搭配越式酸辣酱汁。',
					},
					jp: {
						name: 'スパイシーチキンサラダ',
						description: '甘酸っぱいドレッシングのチキンサラダ。',
					},
				},
			},

			{
				id: 'goi-xoai',
				image: '/menu/goi-xoai.jpg',
				price: '135.000đ',
				translations: {
					en: {
						name: 'Green Mango Seafood Salad',
						description:
							'Crisp green mango with shrimp and seafood in lime dressing.',
					},
					vn: {
						name: 'Gỏi Xoài Hải Sản',
						description: 'Xoài xanh trộn hải sản và nước mắm chua ngọt.',
					},
					kr: {
						name: '망고 해산물 샐러드',
						description: '망고와 해산물을 곁들인 샐러드.',
					},
					cn: {
						name: '青芒果海鲜沙拉',
						description: '青芒果配海鲜。',
					},
					jp: {
						name: '青マンゴーと海鮮のサラダ',
						description: '爽やかなライムドレッシング。',
					},
				},
			},

			{
				id: 'goi-bo-thai',
				image: '/menu/goi-bo.jpg',
				price: '135.000đ',
				translations: {
					en: {
						name: 'Thai Style Beef Salad',
						description:
							'Pan-seared beef slices over fresh vegetables with Thai sauce.',
					},
					vn: {
						name: 'Gỏi Bò Kiểu Thái',
						description: 'Bò áp chảo trộn rau và sốt kiểu Thái.',
					},
					kr: {
						name: '태국식 소고기 샐러드',
						description: '소고기와 태국 소스 샐러드.',
					},
					cn: {
						name: '泰式牛肉沙拉',
						description: '泰式风味牛肉。',
					},
					jp: {
						name: 'タイ風ビーフサラダ',
						description: 'スパイシーなタイソース。',
					},
				},
			},
		],
	},

	// 🔥 GRILLED
	{
		id: 'grilled',
		title: 'Grilled',
		dishes: [
			{
				id: 'xien-que',
				image: '/menu/xien-que.jpg',
				price: '125.000đ',
				translations: {
					en: {
						name: 'Grilled Pork Skewer',
						description:
							'Charcoal grilled pork skewers served with traditional herbs.',
					},
					vn: {
						name: 'Xiên Que Nướng',
						description: 'Thịt xiên nướng than hoa thơm lừng.',
					},
					kr: {
						name: '돼지고기 꼬치구이',
						description: '숯불에 구운 돼지고기 꼬치.',
					},
					cn: {
						name: '烤猪肉串',
						description: '炭火烤制。',
					},
					jp: {
						name: '豚肉の串焼き',
						description: '炭火焼き。',
					},
				},
			},

			{
				id: 'suon-nuong',
				image: '/menu/suon-nuong.jpg',
				price: '195.000đ',
				translations: {
					en: {
						name: 'BBQ Pork Ribs',
						description: 'Slow grilled pork ribs glazed with house marinade.',
					},
					vn: {
						name: 'Sườn Nướng',
						description: 'Sườn nướng sốt đặc biệt.',
					},
					kr: {
						name: '돼지 갈비 구이',
						description: '특제 소스 갈비.',
					},
					cn: {
						name: '烤猪排',
						description: '秘制酱汁。',
					},
					jp: {
						name: 'ポークリブ',
						description: '特製ソース。',
					},
				},
			},

			{
				id: 'muc-nuong',
				image: '/menu/muc-nuong.jpg',
				price: '249.000đ',
				translations: {
					en: {
						name: 'Grilled Squid',
						description:
							'Fresh squid grilled and served with signature chili sauce.',
					},
					vn: {
						name: 'Mực Nướng',
						description: 'Mực nướng ăn kèm sốt ớt Bếp Cuốn.',
					},
					kr: {
						name: '오징어 구이',
						description: '특제 칠리 소스 제공.',
					},
					cn: {
						name: '烤鱿鱼',
						description: '配辣酱。',
					},
					jp: {
						name: 'イカのグリル',
						description: '特製チリソース付き。',
					},
				},
			},
		],
	},

	// 🥞 PANCAKES
	{
		id: 'pancakes',
		title: 'Pancakes',
		dishes: [
			{
				id: 'banh-xeo-nam',
				image: '/menu/banh-xeo-nam.jpg',
				price: '99.000đ',
				translations: {
					en: {
						name: 'Vietnamese Pancake with Mushroom',
						description:
							'Crispy rice pancake filled with mushrooms and vegetables.',
					},
					vn: {
						name: 'Bánh Xèo Nấm',
						description: 'Bánh xèo giòn nhân nấm và rau.',
					},
					kr: {
						name: '버섯 반쎄오',
						description: '바삭한 베트남 팬케이크.',
					},
					cn: {
						name: '蘑菇煎饼',
						description: '越南风味。',
					},
					jp: {
						name: 'マッシュルームのバインセオ',
						description: 'サクサクの生地。',
					},
				},
			},
			{
				id: 'banh-xeo-bo',
				image: '/menu/banh-xeo-bo.jpg',
				price: '99.000đ',
				translations: {
					en: {
						name: 'Vietnamese Pancake with Beef',
						description:
							'Traditional crispy pancake filled with beef and herbs.',
					},
					vn: {
						name: 'Bánh Xèo Bò',
						description: 'Bánh xèo nhân bò.',
					},
					kr: {
						name: '소고기 반쎄오',
						description: '소고기 베트남 팬케이크.',
					},
					cn: {
						name: '牛肉煎饼',
						description: '传统越南风味。',
					},
					jp: {
						name: '牛肉のバインセオ',
						description: '香ばしい生地。',
					},
				},
			},
		],
	},

	// 🍲 CONGEE
	{
		id: 'congee',
		title: 'Congee',
		dishes: [
			{
				id: 'chao-tom',
				image: '/menu/chao-tom.jpg',
				price: '89.000đ',
				translations: {
					en: {
						name: 'Vietnamese Congee with Prawn',
						description: 'Smooth rice porridge topped with fresh prawns.',
					},
					vn: {
						name: 'Cháo Tôm',
						description: 'Cháo trắng nấu cùng tôm.',
					},
					kr: {
						name: '새우 죽',
						description: '부드러운 쌀죽.',
					},
					cn: {
						name: '虾粥',
						description: '鲜虾熬制。',
					},
					jp: {
						name: '海老のおかゆ',
						description: '優しい味わい。',
					},
				},
			},

			{
				id: 'chao-bo-nam',
				image: '/menu/chao-bo-nam.jpg',
				price: '89.000đ',
				translations: {
					en: {
						name: 'Congee with Beef & Mushroom',
						description: 'Rice porridge cooked with beef and mushrooms.',
					},
					vn: {
						name: 'Cháo Bò Nấm',
						description: 'Cháo bò nấu nấm.',
					},
					kr: {
						name: '소고기 버섯 죽',
						description: '진한 맛.',
					},
					cn: {
						name: '牛肉蘑菇粥',
						description: '浓郁口感。',
					},
					jp: {
						name: '牛肉とキノコのおかゆ',
						description: '優しい風味。',
					},
				},
			},

			{
				id: 'chao-hai-san',
				image: '/menu/chao-hai-san.jpg',
				price: '105.000đ',
				translations: {
					en: {
						name: 'Seafood Congee',
						description: 'Creamy rice porridge with mixed seafood.',
					},
					vn: {
						name: 'Cháo Hải Sản',
						description: 'Cháo hải sản thơm ngon.',
					},
					kr: {
						name: '해산물 죽',
						description: '해산물 풍미.',
					},
					cn: {
						name: '海鲜粥',
						description: '鲜美口感。',
					},
					jp: {
						name: '海鮮のおかゆ',
						description: '旨味たっぷり。',
					},
				},
			},
		],
	},

	// 🍚 FRIED RICE
	{
		id: 'fried-rice',
		title: 'Fried Rice',
		dishes: [
			{
				id: 'com-chien-ca-man',
				image: '/menu/com-chien-ca-man.jpg',
				price: '145.000đ',
				translations: {
					en: {
						name: 'Fried Rice with Salty Fish',
						description: 'Traditional Vietnamese fried rice with salty fish.',
					},
					vn: {
						name: 'Cơm Chiên Cá Mặn',
						description: 'Cơm chiên với cá mặn.',
					},
					kr: {
						name: '소금 생선 볶음밥',
						description: '짭짤한 맛.',
					},
					cn: {
						name: '咸鱼炒饭',
						description: '经典风味。',
					},
					jp: {
						name: '塩魚チャーハン',
						description: '香ばしい味。',
					},
				},
			},

			{
				id: 'com-chien-trai-thom',
				image: '/menu/com-chien-trai-thom.jpg',
				price: '145.000đ',
				translations: {
					en: {
						name: 'Pineapple Fried Rice',
						description: 'Fried rice with pork, shrimp and pineapple.',
					},
					vn: {
						name: 'Cơm Chiên Trái Thơm',
						description: 'Cơm chiên với thơm, tôm và thịt.',
					},
					kr: {
						name: '파인애플 볶음밥',
						description: '달콤한 풍미.',
					},
					cn: {
						name: '菠萝炒饭',
						description: '酸甜口感。',
					},
					jp: {
						name: 'パイナップルチャーハン',
						description: '甘酸っぱい味。',
					},
				},
			},

			{
				id: 'com-chien-dua-bo',
				image: '/menu/com-chien-dua-bo.jpg',
				price: '145.000đ',
				translations: {
					en: {
						name: 'Fried Rice with Beef & Pickles',
						description:
							'Beef fried rice served with Vietnamese pickled vegetables.',
					},
					vn: {
						name: 'Cơm Chiên Dưa Bò',
						description: 'Cơm chiên bò và dưa cải.',
					},
					kr: {
						name: '소고기 볶음밥',
						description: '베트남식.',
					},
					cn: {
						name: '牛肉炒饭',
						description: '配酸菜。',
					},
					jp: {
						name: '牛肉チャーハン',
						description: 'ピクルス付き。',
					},
				},
			},
		],
	},

	// 🍷 WINE
	{
		id: 'wine',
		title: 'Wine',
		dishes: [
			{
				id: 'il-pumo-sauvignon',
				image: '/menu/il-pumo-sauvignon.jpg',
				price: '379.000đ',
				translations: {
					en: {
						name: 'IL Pumo Sauvignon',
						description:
							'Italian white wine with citrus aroma and tropical notes.',
					},
					vn: {
						name: 'IL Pumo Sauvignon',
						description: 'Rượu vang trắng Ý hương cam chanh.',
					},
					kr: {
						name: 'IL Pumo 소비뇽',
						description: '상큼한 화이트 와인.',
					},
					cn: {
						name: 'IL Pumo 白葡萄酒',
						description: '清新柑橘香气。',
					},
					jp: {
						name: 'IL Pumo ソーヴィニヨン',
						description: '爽やかな白ワイン。',
					},
				},
			},

			{
				id: 'edda-chardonnay',
				image: '/menu/edda-chardonnay.jpg',
				price: '799.000đ',
				translations: {
					en: {
						name: 'Edda Chardonnay',
						description: 'Elegant Chardonnay with complex grapefruit notes.',
					},
					vn: {
						name: 'Edda Chardonnay',
						description: 'Vang trắng cao cấp.',
					},
					kr: {
						name: '에다 샤르도네',
						description: '복합적인 향.',
					},
					cn: {
						name: 'Edda 霞多丽',
						description: '优雅口感。',
					},
					jp: {
						name: 'エッダ シャルドネ',
						description: '上品な味わい。',
					},
				},
			},

			{
				id: 'tini-sangiovese',
				image: '/menu/tini-sangiovese.jpg',
				price: '349.000đ',
				translations: {
					en: {
						name: 'Tini Sangiovese',
						description: 'Ruby red wine with cherry and plum aromas.',
					},
					vn: {
						name: 'Tini Sangiovese',
						description: 'Vang đỏ hương anh đào.',
					},
					kr: {
						name: '티니 산지오베제',
						description: '과일 향이 풍부.',
					},
					cn: {
						name: 'Tini 桑娇维塞',
						description: '红宝石色。',
					},
					jp: {
						name: 'ティニ サンジョヴェーゼ',
						description: 'フルーティー。',
					},
				},
			},

			{
				id: 'il-pumo-negroamaro',
				image: '/menu/il-pumo-negroamaro.jpg',
				price: '379.000đ',
				translations: {
					en: {
						name: 'IL Pumo Negroamaro',
						description: 'Smooth red wine with cocoa and spice finish.',
					},
					vn: {
						name: 'IL Pumo Negroamaro',
						description: 'Vang đỏ đậm vị.',
					},
					kr: {
						name: '네그로아마로',
						description: '부드러운 피니시.',
					},
					cn: {
						name: 'IL Pumo 红葡萄酒',
						description: '可可香气。',
					},
					jp: {
						name: 'IL Pumo ネグロアマーロ',
						description: 'スパイス感。',
					},
				},
			},
		],
	},

	// 🥤 DRINKS
	{
		id: 'drinks',
		title: 'Drinks',
		dishes: [
			{
				id: 'virgin-mojito',
				image: '/menu/virgin-mojito.jpg',
				price: '45.000đ',
				translations: {
					en: {
						name: 'Virgin Mojito',
						description:
							'Refreshing mojito with calamansi, lime or passion fruit.',
					},
					vn: {
						name: 'Mojito Không Cồn',
						description: 'Mojito vị tắc, chanh hoặc chanh dây.',
					},
					kr: {
						name: '버진 모히토',
						description: '상큼한 음료.',
					},
					cn: {
						name: '无酒精莫吉托',
						description: '清爽口感。',
					},
					jp: {
						name: 'ノンアルコールモヒート',
						description: '爽やか。',
					},
				},
			},

			{
				id: 'lemon-juice',
				image: '/menu/lemon-juice.jpg',
				price: '40.000đ',
				translations: {
					en: {
						name: 'Fresh Lemon Juice',
						description: 'Freshly squeezed lemon juice.',
					},
					vn: {
						name: 'Nước Chanh',
						description: 'Nước chanh tươi.',
					},
					kr: {
						name: '레몬 주스',
						description: '신선한 레몬.',
					},
					cn: {
						name: '鲜榨柠檬汁',
						description: '天然清爽。',
					},
					jp: {
						name: 'レモンジュース',
						description: 'フレッシュ。',
					},
				},
			},
		],
	},
]
