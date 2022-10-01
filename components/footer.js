import { Container, Text, useColorMode } from "@chakra-ui/react";

export default function Footer() {
	const { colorMode, toggleColorMode } = useColorMode()
	return(
		<Container
		p={0}
		maxW={"none"} >
			<Text
			mt="60px"
			mb="10px "
			bg={colorMode === 'light' ? 'dark.300' : 'light.300'}
			textAlign="center"
			borderRadius={15} >
				© 2022 Bash Elliott. All Rights Reserved.
			</Text>
		</Container>
	)
}