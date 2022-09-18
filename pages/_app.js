import styles from '../styles/globals.css'
import Head from 'next/head'
import theme from '../components/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Bash Elliott</title>
			</Head>
			<Component {...pageProps}/>
		</ChakraProvider>
	)
}

export default MyApp
