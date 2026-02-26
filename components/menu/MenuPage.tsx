'use client'

import { menuCategories } from '@/data/menu'
import Image from 'next/image'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'

export default function MenuPage() {
	const [lang, setLang] = useState('en')

	return (
		<main className='min-h-screen bg-[#0e2e1c] text-white py-20 px-6'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-6'>
					<div>
						<h1 className='font-heading text-4xl sm:text-5xl text-[#f2d47a]'>
							Our Menu
						</h1>
						<p className='mt-3 text-white/70'>
							Discover authentic Vietnamese flavors
						</p>
					</div>

					<LanguageSwitcher current={lang} setLang={setLang} />
				</div>

				{/* Categories */}
				{menuCategories.map((category, idx) => (
					<section key={idx} className='mb-20'>
						<h2 className='font-heading text-2xl text-[#d4af37] mb-10'>
							{category.title}
						</h2>

						<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
							{category.items.map(dish => (
								<div
									key={dish.id}
									className='group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-500'
								>
									<div className='relative h-[260px]'>
										<Image
											src={dish.image}
											alt={
												dish.translations[
													lang as keyof typeof dish.translations
												].name
											}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-700'
										/>
									</div>

									<div className='p-6'>
										<h3 className='font-heading text-xl text-[#f2d47a]'>
											{
												dish.translations[
													lang as keyof typeof dish.translations
												].name
											}
										</h3>

										<p className='mt-2 text-white/70 text-sm'>
											{
												dish.translations[
													lang as keyof typeof dish.translations
												].desc
											}
										</p>

										<div className='mt-4 text-white font-semibold'>
											{dish.price}
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</main>
	)
}
