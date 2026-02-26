'use client'

import Image from 'next/image'

const dishes = [
	{
		title: 'Fresh Rice Rolls',
		image: '/dishes/dish1.png',
	},
	{
		title: 'Grilled Duck with Herbs',
		image: '/dishes/dish2.png',
	},
	{
		title: 'Signature Vietnamese Bowl',
		image: '/dishes/dish3.png',
	},
]

export default function FeaturedDishes() {
	return (
		<section id='menu' className='relative bg-[#0e2e1c] text-white py-24 px-6'>
			<div className='max-w-7xl mx-auto'>
				{/* Section Heading */}
				<div className='text-center mb-16'>
					<h2 className='font-heading text-3xl sm:text-5xl text-[#f2d47a]'>
						Featured Dishes
					</h2>

					<p className='mt-4 text-sm tracking-[0.3em] uppercase text-white/60'>
						Crafted with precision & tradition
					</p>
				</div>

				{/* Grid */}
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{dishes.map((dish, index) => (
						<div
							key={index}
							className='relative group overflow-hidden rounded-2xl cursor-pointer'
						>
							{/* Image */}
							<div className='relative h-[380px] w-full'>
								<Image
									src={dish.image}
									alt={dish.title}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-110'
								/>
							</div>

							{/* Dark overlay */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

							{/* Gold hover overlay */}
							<div className='absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-500' />

							{/* Title */}
							<div className='absolute bottom-8 left-8'>
								<h3 className='font-heading text-xl sm:text-2xl text-white group-hover:text-[#f2d47a] transition-colors duration-300'>
									{dish.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
