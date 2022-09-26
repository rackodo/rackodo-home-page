import {
	Container
} from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function Main({ children }) {
	return(
		<Container bg={"red"} maxW="100vw" height="100vh" m={0} p={0}>
			<Navbar />
			<Container
			maxW={600}
			alignItems="center"
			pt="60px" >
				{children}
			</Container>
		</Container>
	)
}