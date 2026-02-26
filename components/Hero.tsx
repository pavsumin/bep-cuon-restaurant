export default function Home() {
	return (
		<main className='relative min-h-screen text-white'>
			{/* Background */}
			<div className='absolute inset-0'>
				<img
					src='/hero.jpg'
					alt='Vietnamese cuisine'
					className='w-full h-full object-cover'
				/>

				{/* Gradient overlay */}
				<div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,46,28,0.45),rgba(14,46,28,0.95))]' />
			</div>

			{/* Content */}
			<section className='relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6'>
				<h1 className='text-4xl sm:text-6xl font-bold tracking-wide text-[#f2d47a] drop-shadow-xl'>
					BÉP CUỐN ĐÀ NẴNG
				</h1>

				<p className='mt-4 text-sm tracking-[0.3em] uppercase text-white/80'>
					Vietnamese Cuisine · Michelin Selected 2024
				</p>

				<div className='mt-8 flex flex-col sm:flex-row gap-4'>
					<button className='px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer'>
						View Menu
					</button>

					<button className='px-8 py-3 bg-[#d4af37] text-black hover:bg-[#f2d47a] transition-all duration-300 cursor-pointer'>
						Book a Table
					</button>
				</div>
			</section>
		</main>
	)
}
