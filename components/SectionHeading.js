import { Box, Text } from "@chakra-ui/react";

export default function SectionHeading( {children} ) {
	return(
		<>
			<Text color="blue.200" fontSize="1.75rem" fontWeight="bold">{children}</Text>
			<Box width="100%" height="1px" bg="linear-gradient(to right, #90cdf4ff, #00000000)"/>
		</>
	)
}