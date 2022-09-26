import {
	Container, Stack
} from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Main({ children }) {
	return(
		<>
			<Navbar />
			<Container
			maxW="100vw"
			p={0}
			bg={"blue.100"} >
				<Container
				maxW={800}
				minH={"100vh"}
				py={"60px"}
				m="auto"
				bg={"blue.200"} >
					<Stack spacing={4}>
						{children}
					</Stack>
				</Container>
			</Container>
		</>
	)
}