import { Flex, Grid, Heading } from "@chakra-ui/react";

export default function FourOhFour() {
	return(
		<Flex
		h="calc(100vh / 2)"
		alignItems="center"
		justifyContent="center">
			<Heading size="xl" fontFamily="VT323" fontStyle="italic">Are you snooping around?</Heading>
		</Flex>
	)
}