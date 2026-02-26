export type Dish = {
	id: string
	price: string
	image: string
	translations: {
		en: { name: string; desc: string }
		vn: { name: string; desc: string }
		kr: { name: string; desc: string }
	}
}

export const menuData = {
	salads: [
		{
			id: 'lotus',
			price: '99.000 VND',
			image: '/menu/lotus.jpg',
			translations: {
				en: { name: 'Lotus Stem Salad', desc: 'Lotus stem with pork & shrimp' },
				vn: { name: 'Gỏi Ngó Sen', desc: 'Ngó sen trộn tôm thịt' },
				kr: { name: '연근 샐러드', desc: '연근과 새우 샐러드' },
			},
		},
		{
			id: 'mango',
			price: '89.000 VND',
			image: '/menu/mango.jpg',
			translations: {
				en: {
					name: 'Green Mango Salad',
					desc: 'Fresh mango with herbs & chili',
				},
				vn: { name: 'Gỏi Xoài', desc: 'Xoài xanh trộn thảo mộc' },
				kr: { name: '망고 샐러드', desc: '허브와 칠리 소스' },
			},
		},
	],

	signature: [
		{
			id: 'duck',
			price: '259.000 VND',
			image: '/menu/duck.jpg',
			translations: {
				en: { name: 'Grilled Duck with Herbs', desc: 'Charcoal grilled duck' },
				vn: { name: 'Vịt Nướng Thảo Mộc', desc: 'Vịt nướng than' },
				kr: { name: '허브 오리 구이', desc: '숯불 오리 구이' },
			},
		},
		{
			id: 'bowl',
			price: '179.000 VND',
			image: '/menu/bowl.jpg',
			translations: {
				en: { name: 'Signature Vietnamese Bowl', desc: 'Balanced rice bowl' },
				vn: { name: 'Bát Cơm Đặc Biệt', desc: 'Cơm cân bằng dinh dưỡng' },
				kr: { name: '베트남 시그니처 볼', desc: '균형 잡힌 한 그릇' },
			},
		},
	],

	rolls: [
		{
			id: 'fresh-rolls',
			price: '129.000 VND',
			image: '/menu/rolls.jpg',
			translations: {
				en: { name: 'Fresh Rice Rolls', desc: 'Rice paper rolls with herbs' },
				vn: { name: 'Cuốn Tươi', desc: 'Cuốn bánh tráng' },
				kr: { name: '라이스 롤', desc: '허브와 함께' },
			},
		},
	],
}
