'use client'

type Props = {
	current: string
	setLang: (lang: string) => void
}

export default function LanguageSwitcher({ current, setLang }: Props) {
	const langs = ['en', 'vn', 'kr']

	return (
		<div className='flex gap-3'>
			{langs.map(lang => (
				<button
					key={lang}
					onClick={() => setLang(lang)}
					className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
						current === lang
							? 'bg-[#d4af37] text-black'
							: 'bg-white/10 text-white hover:bg-white/20'
					}`}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	)
}
