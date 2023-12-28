import {Inter} from 'next/font/google'
import Sidebar from "@/components/sidebar";
import '@/styles/globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'SR-MS',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={inter.className}>
			<Sidebar />
			{children}
		</body>
		</html>
	)
}
