import { Heading } from "@chakra-ui/react"

export function H1({ children }) {
	return(
		<Heading as="h1" fontSize={30}>{children}</Heading>
	)
}

export function H2({ children }) {
	return(
		<Heading as="h2" fontSize={24}>{children}</Heading>
	)
}

export function H3({ children }) {
	return(
		<Heading as="h3" fontSize={20}>{children}</Heading>
	)
}