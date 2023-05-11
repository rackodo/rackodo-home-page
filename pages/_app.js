import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layouts/main'
import { styles } from '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import theme from '../theme/index'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Primary Meta Tags */}
				<title>Bash Elliott</title>
				<meta name="title" content="Bash Elliott" />
				<meta name="description" content='Official website of Bash "Rackodo" Elliott - Frontend Website Developer based in Sydney, Australia.' />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://rackodo.vercel.app/" />
				<meta property="og:title" content="Bash Elliott" />
				<meta property="og:description" content='Official website of Bash "Rackodo" Elliott - Frontend Website Developer based in Sydney, Australia.' />
				<meta property="og:image" content="/images/station.JPG" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://rackodo.vercel.app/" />
				<meta property="twitter:title" content="Bash Elliott" />
				<meta property="twitter:description" content='Official website of Bash "Rackodo" Elliott - Frontend Website Developer based in Sydney, Australia.' />
				<meta property="twitter:image" content="/images/station.JPG" />
			</Head>
			<Main>
				<Component {...pageProps}/>
				<Analytics/>
			</Main>
		</ChakraProvider>
	)
}

export default MyApp
