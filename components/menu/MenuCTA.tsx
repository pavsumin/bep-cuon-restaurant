export default function MenuCTA() {
	return (
		<section className='text-center py-20 border-t border-white/10 flex flex-col items-center justify-center'>
			<h3 className='font-heading text-3xl text-[#f2d47a]'>
				Experience The Menu Yourself
			</h3>
			<div className='mt-12 flex flex-col sm:flex-row gap-5'>
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
	)
}
