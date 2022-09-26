import { Box, Container } from "@chakra-ui/react";

export default function Home() {
	return(
		<>
			<Box 
			p={3}
			bg={"blue.200"}
			textAlign={"center"}
			borderRadius={15} >
				Hi, I&apos;m a frontend web developer based in Australia!
			</Box>
		</>
	)
}