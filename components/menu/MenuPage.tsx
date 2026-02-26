'use client'

import { Dish, menuData } from '@/data/menu'
import Image from 'next/image'
import { useState } from 'react'

type Lang = 'en' | 'vn' | 'kr'
type CategoryKey = 'salads' | 'signature' | 'rolls'

const categories: { key: CategoryKey; label: string }[] = [
	{ key: 'signature', label: 'Signature' },
	{ key: 'salads', label: 'Salads' },
	{ key: 'rolls', label: 'Rice Rolls' },
]

export default function MenuPage() {
	const [lang, setLang] = useState<Lang>('en')
	const [activeCategory, setActiveCategory] = useState<CategoryKey>('signature')

	const dishes: Dish[] = menuData[activeCategory]

	return (
		<main className='min-h-screen bg-[#0e2e1c] text-white pt-28 pb-24 px-6'>
			<div className='max-w-7xl mx-auto'>
				{/* HEADER */}
				<div className='text-center mb-14'>
					<h1 className='font-heading text-4xl sm:text-6xl text-[#f2d47a]'>
						Our Menu
					</h1>

					<p className='mt-4 text-white/70 max-w-xl mx-auto'>
						Authentic Vietnamese cuisine crafted with care.
					</p>

					{/* LANGUAGE SWITCH */}
					<div className='mt-8 flex justify-center gap-3'>
						{(['en', 'vn', 'kr'] as Lang[]).map(l => (
							<button
								key={l}
								onClick={() => setLang(l)}
								className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
									lang === l
										? 'bg-[#d4af37] text-black'
										: 'bg-white/10 hover:bg-white/20'
								}`}
							>
								{l.toUpperCase()}
							</button>
						))}
					</div>
				</div>

				{/* CATEGORY TABS */}
				<div className='flex justify-center gap-6 mb-12 border-b border-white/10 pb-6'>
					{categories.map(cat => (
						<button
							key={cat.key}
							onClick={() => setActiveCategory(cat.key)}
							className={`cursor-pointer relative px-4 py-2 font-medium transition-all duration-300 ${
								activeCategory === cat.key
									? 'text-[#f2d47a]'
									: 'text-white/60 hover:text-white'
							}`}
						>
							{cat.label}

							{activeCategory === cat.key && (
								<span className='absolute left-0 right-0 -bottom-2 h-[2px] bg-[#d4af37]' />
							)}
						</button>
					))}
				</div>

				{/* DISH GRID */}
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{dishes.map(dish => (
						<DishCard key={dish.id} dish={dish} lang={lang} />
					))}
				</div>
			</div>
		</main>
	)
}

function DishCard({ dish, lang }: { dish: Dish; lang: Lang }) {
	return (
		<div className='group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]'>
			<div className='relative h-[240px]'>
				<Image
					src={dish.image}
					alt={dish.translations[lang].name}
					fill
					sizes='(max-width:768px) 100vw, 33vw'
					className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
				/>
			</div>

			<div className='p-5'>
				<h3 className='font-heading text-lg text-[#f2d47a]'>
					{dish.translations[lang].name}
				</h3>

				<p className='mt-2 text-white/70 text-sm'>
					{dish.translations[lang].desc}
				</p>

				<div className='mt-4 font-semibold text-white'>{dish.price}</div>
			</div>
		</div>
	)
}
