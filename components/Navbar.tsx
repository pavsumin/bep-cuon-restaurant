'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<header
				className={`
          fixed top-2 left-0 w-full z-50
          transition-all duration-500
          ${scrolled ? 'bg-[#0e2e1c]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}
        `}
			>
				<div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white'>
					{/* Logo */}
					<div className='font-heading text-lg tracking-widest text-[#f2d47a]'>
						BÉP CUỐN
					</div>

					{/* Desktop Menu */}
					<nav className='hidden md:flex gap-10 text-sm tracking-wider uppercase'>
						{['Story', 'Menu', 'Gallery', 'Location'].map(item => (
							<Link
								key={item}
								href={`#${item.toLowerCase()}`}
								className='relative group cursor-pointer'
							>
								<span className='transition-colors duration-300 group-hover:text-[#d4af37]'>
									{item}
								</span>

								{/* underline */}
								<span className='absolute left-0 -bottom-2 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full' />
							</Link>
						))}
					</nav>

					{/* Reservation Button */}
					<div className='hidden md:block'>
						<a
							href='#book'
							className='
                px-5 py-2
                border border-[#d4af37]
                rounded-full
                text-[#d4af37]
                hover:bg-[#d4af37]
                hover:text-black
                transition-all
                duration-300
                text-sm
                tracking-wide
              '
						>
							Reserve
						</a>
					</div>

					{/* Mobile Burger */}
					<button
						className='md:hidden flex flex-col gap-1.5 cursor-pointer'
						onClick={() => setOpen(!open)}
					>
						<span className='w-6 h-[2px] bg-white rounded-lg' />
						<span className='w-6 h-[2px] bg-white rounded-lg' />
						<span className='w-6 h-[2px] bg-white rounded-lg' />
					</button>
				</div>
			</header>

			{/* Mobile Menu */}
			<div
				className={`
          fixed inset-0 bg-[#0e2e1c] z-40 flex flex-col items-center justify-center gap-8
          text-white text-xl tracking-widest uppercase
          transition-all duration-300
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
			>
				{['Story', 'Menu', 'Gallery', 'Location'].map(item => (
					<Link
						key={item}
						href={`#${item.toLowerCase()}`}
						onClick={() => setOpen(false)}
						className='hover:text-[#d4af37] transition-colors'
					>
						{item}
					</Link>
				))}
			</div>
		</>
	)
}
