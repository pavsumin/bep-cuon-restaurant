export default function StorySection() {
	return (
		<section id='story' className='bg-[#0e2e1c] text-white py-20 px-6'>
			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
				{/* Image */}
				<div className='relative'>
					<img
						src='/story.jpg'
						alt='Bếp Cuốn interior'
						className='w-full h-[400px] md:h-[500px] object-cover rounded-2xl'
					/>
					<div className='absolute inset-0 bg-black/20 rounded-2xl' />
				</div>

				{/* Text */}
				<div>
					<h2 className='font-heading text-3xl md:text-5xl text-[#f2d47a] mb-6'>
						Crafted with Care. Rooted in Tradition.
					</h2>

					<div className='w-20 h-[2px] bg-[#d4af37] mb-6' />

					<p className='font-body text-white/80 leading-relaxed text-lg mb-6'>
						At Bếp Cuốn Đà Nẵng, every dish reflects the depth of Vietnamese
						culinary heritage. From fresh herbs and handmade sauces to carefully
						selected ingredients, each plate is prepared with intention and
						balance.
					</p>

					<p className='font-body text-white/70 leading-relaxed'>
						Recognized by the Michelin Guide, our kitchen blends authenticity
						with refinement — offering a dining experience that feels both
						traditional and elevated.
					</p>

					{/* CTA */}
					<div className='mt-10'>
						<a
							href='/story/'
							className='inline-block px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 rounded-xl'
						>
							Read Our Story
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
