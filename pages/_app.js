import styles from '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layouts/main'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Bash Elliott</title>
			</Head>
			<Main>
				<Component {...pageProps}/>
			</Main>
		</ChakraProvider>
	)
}

export default MyApp
