import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { 
	Box, 
	Center, 
	Flex, 
	Heading,
	IconButton,
	Image, 
	Link, 
	Spacer
} from "@chakra-ui/react";

export default function Navbar() {
	return(
		<Center
		bg="red.100" 
		width="100vw"
		position="fixed"
		backdropFilter='blur(10px)'
		top={0} >
			<Flex
			w="600px"
			h="50px"
			bg="red.200"
			alignItems="center"
			gap={6}
			px={4} >
				<Image
				w={8}
				h={8}
				bg="red.300"
				alt="Rackodo Logo"
				borderRadius={100}
				src="/images/logo.png" />
				<Heading
				fontSize={18}
				display="flex"
				alignSelf="stretch"
				alignItems="center"
				padding="auto" >
					Rackodo
				</Heading>
				<Box
				display="flex"
				h="100%"
				gap={4}
				alignItems={"center"} >
					<NavLink href="/">Home</NavLink>
					<NavLink href="#one">Contact</NavLink>
					<NavLink href="#two">Works</NavLink>
					<NavLink href="#three">Resume</NavLink>
				</Box>
				<Spacer/>
				<IconButton
				w={8}
				h={8}
				size="sm"
				bg="red.300"
				borderRadius={10}
				icon={<SunIcon />} />
			</Flex>
		</Center>
	)
}

function NavLink({ href, children }) {
	return(
		<Link
		href={href}
		display="flex"
		alignSelf="stretch"
		alignItems="center" >
			{children}
		</Link>
	)
}