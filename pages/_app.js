import styles from '../styles/globals.css'
import Head from 'next/head'
import theme from '../components/theme'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
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
