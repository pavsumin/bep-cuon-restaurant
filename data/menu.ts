export type Dish = {
	id: string
	price: string
	translations: {
		en: {
			name: string
			desc: string
		}
		vn: {
			name: string
			desc: string
		}
		kr: {
			name: string
			desc: string
		}
	}
	image: string
}

export const menuCategories = [
	{
		title: 'Salads',
		items: [
			{
				id: 'lotus',
				price: '99.000 VND',
				image: '/menu/lotus.jpg',
				translations: {
					en: {
						name: 'Lotus Stem Salad',
						desc: 'Lotus stem with pork and shrimp',
					},
					vn: {
						name: 'Gỏi Ngó Sen Tôm Thịt',
						desc: 'Ngó sen trộn tôm và thịt',
					},
					kr: {
						name: '연근 샐러드',
						desc: '연근, 돼지고기, 새우',
					},
				},
			},
		],
	},
	{
		title: 'Signature',
		items: [
			{
				id: 'duck',
				price: '259.000 VND',
				image: '/menu/duck.jpg',
				translations: {
					en: {
						name: 'Grilled Duck with Herbs',
						desc: 'Charcoal grilled duck served with fresh herbs',
					},
					vn: {
						name: 'Vịt Nướng Thảo Mộc',
						desc: 'Vịt nướng than ăn kèm rau thơm',
					},
					kr: {
						name: '허브 오리 구이',
						desc: '허브와 함께 제공',
					},
				},
			},
		],
	},
]
