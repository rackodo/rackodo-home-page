import { Box, Container } from "@chakra-ui/react";

export default function Main({ children }) {
	return(
		<Container maxW={600} alignItems="center">
			<Box 
			p={3}
			m={5}
			bg={"blue.200"}
			textAlign={"center"}
			borderRadius={15} >
				Hi, I&apos;m a frontend web developer based in Australia!
			</Box>
			{children}
		</Container>
	)
}