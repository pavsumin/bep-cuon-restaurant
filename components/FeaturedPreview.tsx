'use client'

import Image from 'next/image'

const featured = [
	{
		name: 'Fresh Rice Rolls',
		desc: 'Traditional Vietnamese rice paper rolls with herbs',
		price: '89.000 VND',
		image: '/dishes/dish1.png',
	},
	{
		name: 'Grilled Duck with Herbs',
		desc: 'Charcoal grilled duck served with fresh greens',
		price: '259.000 VND',
		image: '/dishes/dish2.png',
	},
	{
		name: 'Signature Vietnamese Bowl',
		desc: 'Chef’s special bowl with balanced flavors',
		price: '149.000 VND',
		image: '/dishes/dish3.png',
	},
]

export default function FeaturedPreview() {
	return (
		<section
			id='featured'
			className='relative py-24 px-6 bg-[#0e2e1c] overflow-hidden'
		>
			{/* Subtle background glow */}
			<div className='absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 blur-[180px] rounded-full pointer-events-none' />

			<div className='relative max-w-7xl mx-auto'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='font-heading text-4xl sm:text-5xl text-[#f2d47a]'>
						Signature Dishes
					</h2>
					<p className='mt-4 text-white/70 max-w-xl mx-auto'>
						A curated selection of our most celebrated creations
					</p>
				</div>

				{/* Cards */}
				<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
					{featured.map((dish, idx) => (
						<div
							key={idx}
							className='group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl'
						>
							{/* Image */}
							<div className='relative h-[320px] overflow-hidden'>
								<Image
									src={dish.image}
									alt={dish.name}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>

								{/* Soft gradient overlay */}
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
							</div>

							{/* Content */}
							<div className='relative p-6'>
								<h3 className='font-heading text-xl text-[#f2d47a]'>
									{dish.name}
								</h3>

								<p className='mt-2 text-sm text-white/70 leading-relaxed'>
									{dish.desc}
								</p>

								<div className='mt-4 flex justify-between items-center'>
									<span className='text-white font-semibold'>{dish.price}</span>

									<a
										href='/menu'
										className='text-[#d4af37] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
									>
										Explore →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className='text-center mt-16'>
					<a
						href='/menu'
						className='
              px-8 py-3
              bg-gradient-to-r from-[#d4af37] to-[#f2d47a]
              text-black
              rounded-full
              shadow-[0_8px_30px_rgba(212,175,55,0.4)]
							hover:scale-105
              hover:brightness-110
              transition-all
              duration-300
              cursor-pointer
              font-medium
            '
					>
						View Full Menu
					</a>
				</div>
			</div>
		</section>
	)
}
