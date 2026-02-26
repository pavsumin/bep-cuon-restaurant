export default function StorySection() {
	return (
		<section className='py-24 px-6 bg-[#0F0F0F] text-white'>
			<div className='max-w-[900px] mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-8'>
					A Story of Taste & Craft
				</h2>

				<p className='text-white/80 leading-relaxed text-lg mb-6'>
					At Bếp Cuốn, we celebrate the balance of tradition and refinement.
					Each dish is crafted with carefully selected ingredients, honoring
					Vietnamese culinary heritage while embracing modern presentation.
				</p>

				<p className='text-white/70 leading-relaxed'>
					Recognized by the Michelin Guide, our kitchen is driven by precision,
					simplicity, and respect for flavor.
				</p>

				{/* Optional highlight */}
				<div className='mt-12 text-[#C8A45A] text-sm tracking-widest uppercase'>
					4.9 rating · 15,000+ guests
				</div>
			</div>
		</section>
	)
}
