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
				image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
				price: '135.000đ',
				translations: {
					en: {
						name: 'Lotus Stem Salad with Pork & Shrimp',
						description:
							'Fresh lotus stem mixed with herbs, pork and shrimp, served with crispy shrimp crackers.',
					},
					vi: {
						name: 'Gỏi Ngó Sen Tôm Thịt',
						description:
							'Ngó sen tươi trộn cùng rau thơm, thịt heo và tôm, ăn kèm bánh phồng tôm giòn.',
					},
					kr: {
						name: '연근 샐러드',
						description:
							'허브, 돼지고기, 새우를 곁들인 신선한 연근 샐러드, 새우 크래커 제공.',
					},
					jp: {
						name: '蓮根と豚肉と海老のサラダ',
						description:
							'新鮮な蓮根に豚肉と海老、ハーブを合わせ、海老せんべいと共に提供します。',
					},
				},
			},
		],
	},
]
