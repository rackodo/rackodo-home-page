import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
	return(
		<Container
		p={0}
		maxW={"none"} >
			<Text
			my="60px"
			bg={"blue.300"}
			textAlign="center"
			borderRadius={15} >
				© 2022 Bash Elliott. All Rights Reserved.
			</Text>
		</Container>
	)
}