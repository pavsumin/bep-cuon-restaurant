'use client'

import Image from 'next/image'

const galleryImages = [
	{
		id: 'food-1',
		src: '/gallery/food-1.avif',
		alt: 'Fresh Vietnamese rice rolls with herbs',
	},
	{
		id: 'food-2',
		src: '/gallery/food-2.avif',
		alt: 'Grilled duck with traditional herbs',
	},
	{
		id: 'interior',
		src: '/gallery/interior.avif',
		alt: 'Restaurant interior with warm lighting',
	},
]

export default function GallerySection() {
	return (
		<section id='gallery' className='bg-[#0e2e1c] text-white py-24 px-6'>
			{/* Container */}
			<div className='max-w-[1280px] mx-auto'>
				{/* Heading */}
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-[#d4af37]'>
						Gallery
					</h2>

					<p className='mt-4 text-white/70 max-w-2xl mx-auto'>
						Experience the atmosphere, flavors, and elegance of Bếp Cuốn.
					</p>
				</div>

				{/* Grid */}
				<div className='grid gap-6 md:grid-cols-3 md:grid-rows-2'>
					{/* Large food image */}
					<div className='relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group '>
						<Image
							src={galleryImages[0].src}
							alt={galleryImages[0].alt}
							fill
							loading='lazy'
							sizes='(max-width: 768px) 100vw, 66vw'
							className='object-cover   transition-transform duration-700 ease-out'
						/>
					</div>

					{/* Small image 1 */}
					<div className='relative h-[260px] rounded-2xl overflow-hidden group '>
						<Image
							src={galleryImages[1].src}
							alt={galleryImages[1].alt}
							fill
							loading='lazy'
							sizes='(max-width: 768px) 100vw, 33vw'
							className='object-cover   transition-transform duration-700 ease-out'
						/>
					</div>

					{/* Small image 2 */}
					<div className='relative h-[260px] rounded-2xl overflow-hidden group '>
						<Image
							src={galleryImages[2].src}
							alt={galleryImages[2].alt}
							fill
							loading='lazy'
							sizes='(max-width: 768px) 100vw, 33vw'
							className='object-cover   transition-transform duration-700 ease-out'
						/>
					</div>

					{/* Full width bottom on mobile */}
					<div className='relative h-[260px] md:h-auto md:col-span-3 rounded-2xl overflow-hidden group '>
						<Image
							src={galleryImages[0].src}
							alt={galleryImages[0].alt}
							fill
							loading='lazy'
							sizes='100vw'
							className='object-cover   transition-transform duration-700 ease-out'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
