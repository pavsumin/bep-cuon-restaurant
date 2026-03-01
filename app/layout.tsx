import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://bep-cuon-restaurant.vercel.app'),

	title: {
		default: 'Bếp Cuốn Đà Nẵng | Vietnamese Cuisine',
		template: '%s | Bếp Cuốn Đà Nẵng',
	},

	description:
		'Bếp Cuốn Đà Nẵng – authentic Vietnamese cuisine in Da Nang. Michelin Selected 2025. Fresh rolls, grilled specialties, traditional dishes and wine selection.',

	keywords: [
		'Bếp Cuốn Đà Nẵng',
		'Vietnamese restaurant Da Nang',
		'Michelin restaurant Da Nang',
		'Vietnamese cuisine',
		'Best restaurant Da Nang',
		'Gỏi Cuốn Da Nang',
		'Vietnamese food Vietnam',
	],

	authors: [{ name: 'Bếp Cuốn Đà Nẵng' }],
	creator: 'Bếp Cuốn Đà Nẵng',

	openGraph: {
		title: 'Bếp Cuốn Đà Nẵng | Vietnamese Cuisine',
		description:
			'Authentic Vietnamese cuisine in Da Nang. Michelin Selected 2025.',
		url: '/',
		siteName: 'Bếp Cuốn Đà Nẵng',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Bếp Cuốn Đà Nẵng',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Bếp Cuốn Đà Nẵng',
		description:
			'Authentic Vietnamese cuisine in Da Nang. Michelin Selected 2025.',
		images: ['/og-image.jpg'],
	},

	robots: {
		index: true,
		follow: true,
	},
}

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body',
	display: 'swap',
})

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-heading',
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={`${poppins.variable} ${playfair.variable}`}>
			<body className='bg-[#0e2e1c] text-white font-body'>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
