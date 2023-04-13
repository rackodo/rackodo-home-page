import { Container, Stack, useColorMode } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router";


export default function Main({ children }) {
	const { colorMode, toggleColorMode } = useColorMode()
	const { asPath } = useRouter();

	return(
		<>
			<Navbar />
			
		</>
	)
}