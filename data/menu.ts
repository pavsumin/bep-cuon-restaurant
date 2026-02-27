export type Locale = 'en' | 'vi' | 'kr' | 'jp'

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
	{
		id: 'signature',
		title: 'Signature',
		dishes: [
			{
				id: 'lotus-salad',
				image:
					'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200',
				price: '135.000đ',
				translations: {
					en: {
						name: 'Lotus Stem Salad',
						description:
							'Fresh lotus stem mixed with herbs, pork and shrimp, served with crispy crackers.',
					},
					vi: {
						name: 'Gỏi Ngó Sen',
						description:
							'Ngó sen tươi trộn rau thơm, thịt và tôm, ăn kèm bánh phồng.',
					},
					kr: {
						name: '연근 샐러드',
						description: '허브와 돼지고기, 새우를 곁들인 연근 샐러드.',
					},
					jp: {
						name: '蓮根サラダ',
						description: '蓮根と海老、豚肉を合わせた爽やかなサラダ。',
					},
				},
			},
			{
				id: 'duck-herbs',
				image:
					'https://images.unsplash.com/photo-1604908554007-7b6b47d5e4b0?q=80&w=1200',
				price: '259.000đ',
				translations: {
					en: {
						name: 'Grilled Duck with Herbs',
						description:
							'Slow-roasted duck infused with lemongrass and served with fresh herbs.',
					},
					vi: {
						name: 'Vịt Nướng Thảo Mộc',
						description: 'Vịt quay chậm ướp sả, ăn kèm rau thơm đặc trưng.',
					},
					kr: {
						name: '허브 오리 구이',
						description: '레몬그라스로 풍미를 더한 오리 요리.',
					},
					jp: {
						name: 'ハーブ鴨グリル',
						description: 'レモングラスで味付けした鴨料理。',
					},
				},
			},
		],
	},

	{
		id: 'rolls',
		title: 'Rice Rolls',
		dishes: [
			{
				id: 'fresh-rolls',
				image:
					'https://images.unsplash.com/photo-1617196038430-7b4d37c9df66?q=80&w=1200',
				price: '119.000đ',
				translations: {
					en: {
						name: 'Fresh Rice Rolls',
						description:
							'Handcrafted rice rolls filled with herbs and premium meat.',
					},
					vi: {
						name: 'Cuốn Tươi',
						description: 'Cuốn tươi thủ công với rau thơm và thịt chọn lọc.',
					},
					kr: {
						name: '신선한 라이스 롤',
						description: '허브와 고기를 넣은 수제 롤.',
					},
					jp: {
						name: '生春巻き',
						description: 'ハーブと肉を包んだ手作りロール。',
					},
				},
			},
		],
	},

	{
		id: 'noodles',
		title: 'Traditional Noodles',
		dishes: [
			{
				id: 'pho-bo',
				image:
					'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200',
				price: '95.000đ',
				translations: {
					en: {
						name: 'Phở Bò',
						description:
							'Traditional Vietnamese beef noodle soup with slow-simmered broth.',
					},
					vi: {
						name: 'Phở Bò',
						description: 'Phở bò truyền thống với nước dùng ninh lâu.',
					},
					kr: {
						name: '소고기 쌀국수',
						description: '진하게 우려낸 전통 쌀국수.',
					},
					jp: {
						name: '牛肉フォー',
						description: 'じっくり煮込んだスープのフォー。',
					},
				},
			},
			{
				id: 'bun-cha',
				image:
					'https://images.unsplash.com/photo-1617191512007-59e7eac191f8?q=80&w=1200',
				price: '129.000đ',
				translations: {
					en: {
						name: 'Bún Chả Hà Nội',
						description:
							'Grilled pork served with rice noodles and dipping sauce.',
					},
					vi: {
						name: 'Bún Chả Hà Nội',
						description: 'Bún chả nướng truyền thống Hà Nội.',
					},
					kr: {
						name: '분짜 하노이',
						description: '구운 돼지고기와 쌀국수.',
					},
					jp: { name: 'ブンチャー', description: '焼き豚と米麺料理。' },
				},
			},
		],
	},

	{
		id: 'seafood',
		title: 'Seafood',
		dishes: [
			{
				id: 'grilled-shrimp',
				image:
					'https://images.unsplash.com/photo-1625943555409-6a7aa8adcb58?q=80&w=1200',
				price: '189.000đ',
				translations: {
					en: {
						name: 'Grilled Tiger Shrimp',
						description: 'Charcoal-grilled shrimp with garlic butter.',
					},
					vi: {
						name: 'Tôm Sú Nướng',
						description: 'Tôm sú nướng than với bơ tỏi.',
					},
					kr: {
						name: '숯불 새우구이',
						description: '마늘 버터를 곁들인 새우.',
					},
					jp: {
						name: 'グリル海老',
						description: 'ガーリックバター風味。',
					},
				},
			},
		],
	},

	{
		id: 'desserts',
		title: 'Desserts',
		dishes: [
			{
				id: 'mango',
				image:
					'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=1200',
				price: '79.000đ',
				translations: {
					en: {
						name: 'Fresh Mango Dessert',
						description: 'Sweet mango served with coconut cream.',
					},
					vi: {
						name: 'Xoài Tươi',
						description: 'Xoài ngọt ăn kèm kem dừa.',
					},
					kr: {
						name: '망고 디저트',
						description: '코코넛 크림을 곁들인 망고.',
					},
					jp: {
						name: 'マンゴーデザート',
						description: 'ココナッツクリーム添え。',
					},
				},
			},
		],
	},
]
