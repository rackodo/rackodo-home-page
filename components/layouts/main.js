import { Container } from "@chakra-ui/react";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Main({ children }) {
	return(
		<Container maxW={600} alignItems="center">
			<Navbar />
			{children}
			<Footer />
		</Container>
	)
}