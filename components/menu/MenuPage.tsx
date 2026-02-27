'use client'

import { Locale, menuData } from '@/data/menu'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const locales: Locale[] = ['en', 'vi', 'kr', 'jp']

export default function MenuPage() {
	const [activeCategory, setActiveCategory] = useState(menuData[0].id)
	const [locale, setLocale] = useState<Locale>('en')

	const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveCategory(entry.target.id)
					}
				})
			},
			{
				rootMargin: '-40% 0px -50% 0px',
				threshold: 0,
			},
		)

		Object.values(sectionRefs.current).forEach(section => {
			if (section) observer.observe(section)
		})

		return () => observer.disconnect()
	}, [])

	const scrollToCategory = (id: string) => {
		sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<main className='bg-[#0e2e1c] text-white min-h-screen'>
			{/* Header */}
			<section className='pt-32 pb-16 text-center px-6'>
				<h1 className='text-4xl md:text-5xl font-bold text-[#d4af37]'>
					Our Menu
				</h1>

				<p className='mt-4 text-white/70 max-w-xl mx-auto'>
					Discover authentic Vietnamese cuisine crafted with tradition and
					refined with elegance.
				</p>

				{/* Language Switcher */}
				<div className='mt-8 flex justify-center gap-4'>
					{locales.map(lang => (
						<button
							key={lang}
							onClick={() => setLocale(lang)}
							className={`cursor-pointer px-4 py-2 rounded-full text-sm transition-all ${
								locale === lang
									? 'bg-[#d4af37] text-black'
									: 'text-white/60 hover:text-white border border-white/10'
							}`}
						>
							{lang.toUpperCase()}
						</button>
					))}
				</div>
			</section>

			{/* Sticky Categories */}
			<div className='sticky top-[76px] z-30 bg-[#0e2e1c]/80 backdrop-blur-md border-b border-white/10'>
				<div className='max-w-[1280px] mx-auto px-6 py-5 flex gap-6 overflow-x-auto scrollbar-hide'>
					{menuData.map(category => (
						<button
							key={category.id}
							onClick={() => scrollToCategory(category.id)}
							className={`whitespace-nowrap cursor-pointer px-4 py-2 rounded-full text-sm transition-all ${
								activeCategory === category.id
									? 'bg-[#d4af37] text-black'
									: 'text-white/60 hover:text-white'
							}`}
						>
							{category.title}
						</button>
					))}
				</div>
			</div>

			{/* Sections */}
			<div className='max-w-[1280px] mx-auto px-6 py-20 space-y-24'>
				{menuData.map(category => (
					<section
						key={category.id}
						id={category.id}
						ref={el => {
							sectionRefs.current[category.id] = el
						}}
					>
						<h2 className='text-2xl font-semibold text-[#d4af37] mb-10'>
							{category.title}
						</h2>

						<div className='grid md:grid-cols-3 gap-8'>
							{category.dishes.map(dish => {
								const translation = dish.translations[locale]

								return (
									<div
										key={dish.id}
										className='group bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300'
									>
										<div className='relative h-56'>
											<Image
												src={dish.image}
												alt={translation.name}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-500'
											/>
										</div>

										<div className='p-6 space-y-3'>
											<div className='flex justify-between items-start'>
												<h3 className='font-medium text-lg'>
													{translation.name}
												</h3>
												<span className='text-[#d4af37] whitespace-nowrap'>
													{dish.price}
												</span>
											</div>

											<p className='text-white/60 text-sm leading-relaxed'>
												{translation.description}
											</p>
										</div>
									</div>
								)
							})}
						</div>
					</section>
				))}
			</div>
		</main>
	)
}
