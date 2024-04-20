import Main from "@/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Main>
				<Component {...pageProps} style={{backgroundColor: "black"}}/>
			</Main>
		</ChakraProvider>
	)
}

export default MyApp
