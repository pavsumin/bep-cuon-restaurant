export default function StoryPage() {
	return (
		<main className='bg-[#0e2e1c] text-white min-h-screen px-6 py-24'>
			<div className='max-w-4xl mx-auto'>
				{/* Title */}
				<h1 className='font-heading text-4xl md:text-6xl text-[#f2d47a] mb-6'>
					Our Story
				</h1>

				<div className='w-20 h-[2px] bg-[#d4af37] mb-10' />

				{/* Intro */}
				<p className='font-body text-lg text-white/80 leading-relaxed mb-8'>
					Bếp Cuốn Đà Nẵng was founded with a simple philosophy: honor
					Vietnamese culinary heritage while elevating the dining experience for
					a modern generation.
				</p>

				{/* Section 1 */}
				<h2 className='font-heading text-2xl text-[#f2d47a] mt-12 mb-4'>
					Rooted in Tradition
				</h2>

				<p className='font-body text-white/75 leading-relaxed mb-6'>
					Inspired by the vibrant street food culture of Vietnam, the kitchen
					preserves authentic flavors, handmade techniques, and carefully
					selected local ingredients.
				</p>

				{/* Section 2 */}
				<h2 className='font-heading text-2xl text-[#f2d47a] mt-12 mb-4'>
					Refined for Today
				</h2>

				<p className='font-body text-white/75 leading-relaxed mb-6'>
					Recognition from the Michelin Guide reflects the dedication to
					balance, detail, and hospitality that defines every experience at Bếp
					Cuốn.
				</p>

				{/* Quote */}
				<div className='mt-16 border-l-2 border-[#d4af37] pl-6 italic text-white/70'>
					“Food is not only nourishment — it is memory, culture, and
					connection.”
				</div>
			</div>
		</main>
	)
}
