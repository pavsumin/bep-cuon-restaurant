import Image from 'next/image'

const sections = [
	{
		title: 'Where It Began',
		text: `Bếp Cuốn was born from a simple idea — to bring the warmth of Vietnamese home kitchens into a space where tradition and refinement meet.

In Vietnam, meals are not just food. They are rituals. They are conversations. They are connection.

The founders envisioned a place where classic flavors could live in a contemporary setting — elegant, but deeply authentic.`,
		image: '/story/1.jpg',
	},
	{
		title: 'The Meaning Behind The Name',
		text: `“Bếp” means kitchen — the heart of every Vietnamese home. “Cuốn” refers to rolled dishes, one of Vietnam’s most beloved culinary traditions.

The name reflects both craft and intimacy. A place where ingredients are wrapped, balanced, and assembled with care — just like stories around a family table.`,
		image: '/story/2.webp',
	},
	{
		title: 'Flavors From North To South',
		text: `The menu represents Vietnam’s diversity — northern delicacy, central depth, and southern vibrancy.

Fresh herbs, rice paper, grilled meats, house-made sauces. Every plate honors traditional technique while embracing a modern presentation.

Nothing is rushed. Nothing is artificial.`,
		image: '/story/3.jpg',
	},
	{
		title: 'Recognized by Michelin',
		text: `In 2025, Bếp Cuốn was selected by the Michelin Guide — a milestone that reflects consistency, authenticity, and dedication.

But beyond recognition, the mission remains the same:
To serve honest Vietnamese cuisine with soul.`,
		image: '/story/4.webp',
	},
]

export default function StoryPage() {
	return (
		<main className='bg-[#0e2e1c] text-white'>
			{/* HERO */}
			<section className='relative h-[70vh] flex items-center justify-center text-center px-6'>
				<Image
					src='/hero2.jpg'
					alt='Restaurant atmosphere'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-black/60' />

				<div className='relative z-10 max-w-3xl'>
					<h1 className='font-heading text-4xl sm:text-6xl text-[#f2d47a]'>
						Our Story
					</h1>
					<p className='mt-6 text-white/80 text-lg'>
						A journey through tradition, flavor, and heritage.
					</p>
				</div>
			</section>

			{/* STORY BLOCKS */}
			<section className='max-w-6xl mx-auto px-6 py-24 space-y-28'>
				{sections.map((section, index) => (
					<div key={index} className='grid md:grid-cols-2 gap-12 items-center'>
						{/* IMAGE */}
						<div
							className={`relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl ${
								index % 2 === 1 ? 'md:order-2' : ''
							}`}
						>
							<Image
								src={section.image}
								alt={section.title}
								fill
								className='object-cover'
							/>
						</div>

						{/* TEXT */}
						<div>
							<h2 className='font-heading text-3xl text-[#f2d47a] mb-6'>
								{section.title}
							</h2>
							<p className='text-white/80 leading-relaxed whitespace-pre-line'>
								{section.text}
							</p>
						</div>
					</div>
				))}
			</section>

			{/* CTA */}
			<section className='text-center py-20 border-t border-white/10 flex flex-col items-center justify-center'>
				<h3 className='font-heading text-3xl text-[#f2d47a]'>
					Experience The Story Yourself
				</h3>
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
						href='/reserve'
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
