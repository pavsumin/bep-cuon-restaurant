import Image from 'next/image'

export default function Hero() {
	return (
		<section className='relative h-screen w-full overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<Image
					src='/hero.jpg'
					alt='Bep Cuon Signature Dish'
					fill
					priority
					className='object-cover'
				/>
			</div>

			{/* Overlay */}
			<div className='absolute inset-0 bg-heroGradient' />

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-6'>
				<h1 className='text-4xl md:text-6xl font-bold text-brandGold tracking-wide uppercase'>
					Bếp Cuốn Đà Nẵng
				</h1>

				<p className='mt-4 text-brandLightGold text-lg md:text-xl max-w-xl'>
					Vietnamese Cuisine • Michelin Selected 2024
				</p>

				<div className='mt-8 flex gap-4'>
					<button className='bg-brandGold text-brandGreen px-6 py-3 rounded-full font-semibold hover:scale-105 transition'>
						View Menu
					</button>

					<button className='border border-brandGold text-brandGold px-6 py-3 rounded-full font-semibold hover:bg-brandGold hover:text-brandGreen transition'>
						Book a Table
					</button>
				</div>
			</div>
		</section>
	)
}
