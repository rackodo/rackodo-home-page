import Head from "next/head";
import Image from "next/image";
import { Source_Code_Pro, VT323 } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const scp = VT323({ subsets: ["latin"], weight: '400' });

export default function Home() {
	return (
		<Flex bg="black" w="100dvw" h="100dvh" p="20px" flexDirection="column" gap="20px">
			<Box border="1px solid red" p="20px">
				<Heading className={scp.className} fontFamily={scp.style} color="red.300">Bash Elliott</Heading>
			</Box>
			<Box border="1px solid red" flex="auto" alignItems="center" justifyContent="center" display="flex">
				<Text fontSize="1.5rem" className={scp.className} fontFamily={scp.style} color="red.300">WIP. Check back later.</Text>
			</Box>
		</Flex>
	);
}
