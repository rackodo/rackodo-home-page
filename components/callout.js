import { Box, Container } from "@chakra-ui/react";

export default function Callout({ children }) {
	return(
		<Container px={0} py={2} maxW={"none"}>
			<Box
			p={3}
			bg={"blue.300"}
			textAlign={"center"}
			borderRadius={15} >
				{children}
			</Box>
		</Container>
	)
}