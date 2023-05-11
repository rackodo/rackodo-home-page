import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";


export default function Main({ children }) {
	const { asPath } = useRouter();

	return(
		<div>
			<Navbar />
			<Box
			w="100vw"
			h="calc(100vh - 50px)">
				{children}
			</Box>
		</div>
	)
}