import {
	ChevronDownIcon,
	ChevronUpIcon,
	SunIcon
} from "@chakra-ui/icons";

import { 
	Box,
	Center, 
	Flex, 
	Heading,
	IconButton,
	Menu, 
	MenuButton, 
	MenuItem, 
	MenuList, 
	Spacer,
	Text
} from "@chakra-ui/react";

import Link from "next/link";

import links from './links.json'

export default function Navbar() {
	return(
		<Center
		bg="red.100" 
		width="100vw"
		position="fixed"
		backdropFilter='blur(10px)'
		top={0}
		left={0}
		zIndex={1} >
			<Flex
			w={650}
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
				h="100%"
				gap={4}
				alignItems={"center"}
				display={{base: "none", md: "flex"}} >
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
							icon={isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
							display={{base: "inline-flex", md: "none"}} />
							<MenuList
							bg={"green.200"}
							p={0} 
							display={{base: "block", md: "none"}}  >
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
		href={href} passHref>
			<Box as="a" display="flex" alignItems="center" alignSelf="stretch">{children}</Box>
		</Link>
	)
}