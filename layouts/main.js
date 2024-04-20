import HeaderButton from "@/components/HeaderButton";
import { Box, Flex, IconButton, ListIcon, Text } from "@chakra-ui/react";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Main( {children }) {
	return(
		<Flex 
		bg="black" 
		w="100dvw" 
		h="100dvh" 
		p="10px" 
		gap="10px" 
		flexDirection="column" 
		>
			<Flex gap="10px">
				<Box
				border="1px solid" 
				borderColor="blue.300" 
				p="10px" 
				flex="100%" 
				justifyContent="center"
				>
					<Text color="blue.200" fontSize="1.5rem" fontWeight="bold">Bash Elliott</Text>
				</Box>
				<HeaderButton icon={faGithub} href="https://github.com/rackodo"/>
				<HeaderButton icon={faInstagram} href="https://instagram.com/rackodo/"/>
			</Flex>
			<Flex
			border="1px solid" 
			borderColor="blue.300" 
			p="10px" 
			justifyContent="center" 
			flex="100%" 
			color="blue.200" 
			fontSize="1rem" 
			alignItems="center"
			>
				<Box>
					{children}
				</Box>
			</Flex>
		</Flex>
	)
}