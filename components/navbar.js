import { ChevronDownIcon, ChevronUpIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Box, Center, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useColorMode } from "@chakra-ui/react";

import Link from "next/link";

import links from './links.json'

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return(
		<Center
		width="100vw"
		position="fixed"
		backdropFilter='blur(10px)'
		top={0}
		left={0}
		zIndex={1} >
			<Flex
			w={650}
			h="50px"
			bg={colorMode === 'light' ? 'dark.250' : 'light.250'}
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
							borderRadius={10}
							icon={isOpen ? <ChevronUpIcon/> : <ChevronDownIcon/>}
							display={{base: "inline-flex", md: "none"}}
							variant="IconButton" />
							<MenuList
							bg={colorMode === 'light' ? 'dark.400' : 'light.400'}
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
											bg: colorMode === 'light' ? 'dark.500' : 'light.500'
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
					borderRadius={10}
					icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon />}
					onClick={toggleColorMode}
					bg={colorMode === 'light' ? 'yellow.400' : 'purple.400 '}
					_hover={{
						bg: colorMode === 'light' ? 'yellow.500' : 'purple.500'
					}} />
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