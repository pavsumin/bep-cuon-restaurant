export type Dish = {
	id: string
	name: string
	price: string
	image: string
}

export type Category = {
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
				id: 'fresh-rolls',
				name: 'Fresh Rice Rolls',
				price: '120.000₫',
				image:
					'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=80',
			},
			{
				id: 'duck-herbs',
				name: 'Grilled Duck with Herbs',
				price: '320.000₫',
				image:
					'https://images.unsplash.com/photo-1604909053190-2a9b7f5c0b4a?w=1200&q=80',
			},
			{
				id: 'signature-bowl',
				name: 'Signature Vietnamese Bowl',
				price: '180.000₫',
				image:
					'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1200&q=80',
			},
		],
	},
	{
		id: 'grilled',
		title: 'Grilled Dishes',
		dishes: [
			{
				id: 'beef-skewers',
				name: 'Grilled Beef Skewers',
				price: '210.000₫',
				image:
					'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80',
			},
			{
				id: 'lemongrass-chicken',
				name: 'Lemongrass Chicken',
				price: '190.000₫',
				image:
					'https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200&q=80',
			},
		],
	},
	{
		id: 'noodles',
		title: 'Traditional Noodles',
		dishes: [
			{
				id: 'pho-beef',
				name: 'Phở Bò',
				price: '95.000₫',
				image:
					'https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=80',
			},
			{
				id: 'bun-cha',
				name: 'Bún Chả',
				price: '110.000₫',
				image:
					'https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=1200&q=80',
			},
		],
	},
]
