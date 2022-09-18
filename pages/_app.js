import globals from '../styles/globals.css'

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from '../themeConfig'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={lightTheme}>
			<ChakraProvider>
				<GlobalStyles />
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Bash Elliott</title>
				</Head>
				<Component {...pageProps} />
			</ChakraProvider>
		</ThemeProvider>
	)
}

export default MyApp
