import { Container, Text } from "@chakra-ui/react";

export default function Section({ children }) {
	return(
		<Container
		p={3}
		maxW={"none"}
		bg={"blue.300"}
		borderRadius={15} >
			{children}
		</Container>
	)
}

export function TextSection({ children }) {
	return(
		<Text style={{ textIndent: 16}} textAlign="justify">{children}</Text>
	)
}