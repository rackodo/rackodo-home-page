import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layouts/main'
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from '@chakra-ui/react';

const props = StyleFunctionProps

const theme = extendTheme ({
	initialColorMode: 'dark',
	useSystemColorMode: true,
		colors: {
			light: {
				100: '#172f45',
				200: '#1b5080',
				250: '#1b508088',
				300: '#1e6db3',
				400: '#1c7ed4',
				500: '#61b5ff'
			},
			dark: {
				100: '#36abff',
				200: '#82cbff',
				250: '#82cbff88',
				300: '#9ed7ff',
				400: '#c9e9ff',
				500: '#e0f2ff'
			}
		},
	components: {
		Link: {
			baseStyle: {
				fontWeight: 'bold',
				fontStyle: 'oblique'
			}
		}
	}
})

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
			</Main>
		</ChakraProvider>
	)
}

export default MyApp
