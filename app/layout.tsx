import { bepSerif } from './fonts'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={bepSerif.variable}>
			<body>{children}</body>
		</html>
	)
}
