export default function Footer() {
	return (
		<footer
			id='location'
			className='bg-[#0b2416] text-white mt-16 border-t border-white/10'
		>
			<div className='max-w-[1280px] mx-auto px-6 py-16 grid md:grid-cols-2 gap-12'>
				{/* LEFT — Location */}
				<div className='space-y-6'>
					<h2 className='text-2xl font-semibold text-[#d4af37]'>Location</h2>

					<p className='text-white/70 leading-relaxed'>
						Bếp Cuốn Restaurant
						<br />
						Da Nang, Vietnam
					</p>

					<div className='rounded-2xl overflow-hidden border border-white/10'>
						<iframe
							src='https://www.google.com/maps?q=Bep%20Cuon%20Da%20Nang&output=embed'
							width='100%'
							height='300'
							style={{ border: 0 }}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						/>
					</div>
				</div>

				{/* RIGHT — Info */}
				<div className='space-y-10'>
					{/* Hours */}
					<div>
						<h3 className='text-xl font-semibold text-[#d4af37] mb-4'>
							Opening Hours
						</h3>

						<div className='text-white/70 space-y-2'>
							<p>Mon – Fri: 10:30 AM – 9:00 PM</p>
							<p>Saturday: 10:30 AM – 8:00 PM</p>
							<p>Sunday: 10:30 AM – 9:00 PM</p>
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-xl font-semibold text-[#d4af37] mb-4'>
							Contact
						</h3>

						<div className='text-white/70 space-y-2'>
							<p>Phone: +84 702 689 989</p>
							<p>Email: bepcuondanang@gmail.com</p>
						</div>
					</div>

					<div className='mt-12'>
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
				</div>
			</div>

			{/* Bottom line */}
			<div className='text-center text-white/40 py-6 border-t border-white/10 text-sm'>
				© {new Date().getFullYear()} Bếp Cuốn. All rights reserved.
			</div>
		</footer>
	)
}
