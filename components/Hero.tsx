export default function Home() {
	return (
		<main className='relative min-h-screen text-white overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0'>
				<img
					src='/hero.jpg'
					alt='Vietnamese cuisine'
					className='w-full h-full object-cover'
				/>

				{/* Main gradient */}
				<div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,46,28,0.45),rgba(14,46,28,0.95))]' />

				{/* Radial cinematic light */}
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]' />

				{/* Vignette */}
				<div className='absolute inset-0 bg-black/40' />
			</div>

			{/* Content */}
			<section className='relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6'>
				<h1 className='font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide text-[#f2d47a] drop-shadow-lg'>
					BÉP CUỐN ĐÀ NẴNG
				</h1>

				<p className='mt-5 font-body text-xs sm:text-sm tracking-[0.4em] uppercase text-white/80'>
					Vietnamese Cuisine · Michelin Selected 2025
				</p>

				<div className='mt-12 flex flex-col sm:flex-row gap-5'>
					{/* Secondary first */}
					<a
						href='/menu'
						className='
              px-8 py-3
              border border-[#d4af37]
              text-[#d4af37]
              rounded-full
              hover:bg-[#d4af37]
							hover:scale-105
							hover:brightness-110
              hover:text-black
              transition-all
              duration-300
              cursor-pointer
              tracking-wide
            '
					>
						View Menu
					</a>

					{/* Primary */}
					<a
						href='#book'
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
						Book a Table
					</a>
				</div>
			</section>
		</main>
	)
}
