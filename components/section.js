import { Container, Stack, Text } from "@chakra-ui/react";

export default function Section({ children }) {
	return(
		<Stack
		p={8}
		maxW={"none"}
		bg={"blue.300"}
		borderRadius={15}
		spacing={4} >
			{children}
		</Stack>
	)
}

export function ParaSection({ children }) {
	return(
		<Text style={{ textIndent: 16 }} textAlign="justify">{children}</Text>
	)
}

export function TextSection({ children }) {
	return(
		<Text textAlign="justify">{children}</Text>
	)
}