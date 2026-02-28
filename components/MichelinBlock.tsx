export default function MichelinBlock() {
	return (
		<section className='relative bg-[#0e2e1c] text-white py-20 px-6 overflow-hidden'>
			{/* subtle gradient glow */}
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]' />

			<div className='relative z-10 max-w-5xl mx-auto text-center'>
				{/* Label */}
				<p className='font-body tracking-[0.4em] text-xs text-[#d4af37] uppercase'>
					Michelin Selected 2024
				</p>

				{/* Title */}
				<h2 className='mt-6 font-heading text-3xl sm:text-5xl font-bold text-[#f2d47a]'>
					A Contemporary Expression
					<br className='hidden sm:block' />
					of Vietnamese Cuisine
				</h2>

				{/* Divider */}
				<div className='mt-8 flex justify-center'>
					<div className='w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent' />
				</div>

				{/* Description */}
				<p className='mt-8 font-body text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto'>
					At Bếp Cuốn Đà Nẵng, tradition meets refinement. Each dish reflects
					balance, authenticity, and a deep respect for Vietnamese culinary
					heritage — elevated for a modern dining experience.
				</p>

				{/* CTA */}
				<div className='mt-10'>
					<a
						href='/menu'
						className='inline-block px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 rounded-xl'
					>
						Explore Our Menu
					</a>
				</div>
			</div>
		</section>
	)
}
