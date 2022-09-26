import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
	return(
		<Container
		p={0}
		maxW={"none"}
		bg={"blue.300"}
		borderRadius={15} >
			<Text
			my="60px"
			bg={"blue.400"}
			textAlign="center"
			borderRadius={15} >
				© 2022 Bash Elliott. All Rights Reserved.
			</Text>
		</Container>
	)
}