import {
	ChevronDownIcon,
	ChevronUpIcon,
	SunIcon
} from "@chakra-ui/icons";

import { 
	Box,
	Center, 
	Container, 
	Flex, 
	Heading,
	IconButton,
	Link, 
	Menu, 
	MenuButton, 
	MenuItem, 
	MenuList, 
	Spacer,
	Text
} from "@chakra-ui/react";
import links from './links.json'

export default function Navbar() {
	return(
		<Center
		bg="red.100" 
		width="100vw"
		position="fixed"
		backdropFilter='blur(10px)'
		top={0}
		left={0} >
			<Flex
			w={800}
			h="50px"
			bg="red.200"
			alignItems="center"
			m="auto"
			px={4}
			gap={8} >
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
					{links.map((link) => 
						<NavLink key={link.name} href={link.href}>{link.name}</NavLink>
					)}
				</Box>
				<Spacer/>
				<Flex gap={4}>
					<Menu>
						{({ isOpen }) => (
						<>
							<MenuButton
							as={IconButton}
							w={10}
							h={10}
							bg="red.300"
							borderRadius={10}
							icon={isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}/>
							<MenuList
							bg={"green.200"}
							p={0} >
								{links.map((link) =>
									<NavLink
									as={MenuItem}
									key={link.name}
									href={link.href} >
										<Text
										p={2}
										width="100%"
										_hover={{
											bg: 'green.300'
										}} >{link.name}</Text>
									</NavLink>
								)}
							</MenuList>
						</>
						)}
					</Menu>
					<IconButton
					w={10}
					h={10}
					bg="red.300"
					borderRadius={10}
					icon={<SunIcon />} />
				</Flex>
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