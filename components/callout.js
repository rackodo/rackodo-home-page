import { Box, Container, useColorMode } from "@chakra-ui/react";

export default function Callout({ children }) {
	const { colorMode, toggleColorMode } = useColorMode()
	return(
		<Container
		px={0}
		maxW={"none"} >
			<Box
			p={3}
			bg={colorMode === 'light' ? 'dark.300' : 'light.300'}
			textAlign={"center"}
			borderRadius={15} >
				{children}
			</Box>
		</Container>
	)
}