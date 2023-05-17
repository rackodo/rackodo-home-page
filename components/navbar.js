import { 
	Button, 
	HStack, 
	IconButton, 
	Text } from "@chakra-ui/react";

import React from "react";

import { useRouter } from "next/router";

import NextLink from 'next/link';

import { 
	faEnvelope,
	faFolderOpen,
	faHome, 
	faProjectDiagram, 
	faUser} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
	return (
		<HStack
		position="fixed"
		width="100vw"
		backdropFilter="blur(10px)"
		h="50px"
		zIndex="50"
		fontSize={{base: "14px", md: "initial"}}
		paddingX={{base: "10px", lg: "150px", md: "50px"}}
	>
		<HStack flex={{base: "40%", md: "50%"}}>
			<NextLink href="/" passHref legacyBehavior>
				<NavLink
					icon={faHome}
					name="Home"
					id="home"
				/>
			</NextLink>
			<NextLink href="/works" passHref legacyBehavior>
				<NavLink
					icon={faFolderOpen}
					name="Works"
					id="works"
				/>
			</NextLink>
			<NextLink href="/about" passHref legacyBehavior>
				<NavLink
					icon={faUser}
					name="About"
					id="about"
				/>
			</NextLink>
			<NextLink href="/projects" passHref legacyBehavior>
				<NavLink
					icon={faProjectDiagram}
					name="Projects"
					id="projects"
				/>
			</NextLink>
		</HStack>
		<HStack 
		flex={{base: "none", sm: "40%"}}
		justifyContent="right" >
			<NextLink href="mailto:rackodo.business@gmail.com" passHref legacyBehavior>
				<IconButton
					variant="outline"
					icon={<FontAwesomeIcon icon={faEnvelope} />}
				/>
			</NextLink>
		</HStack >
	</HStack >
	);
}

const NavLink = (props) => {
	
	const router = useRouter();

	let fOut = ".3s"
	let fIn = ".5s"
	
	let active = props.href == router.pathname ? true : false
	
	return (
	<Button
		variant={'solid'}
		height="40px"
		flex={active ? "100%" : "40px"}
		transitionProperty="all"
		transitionDuration={fIn}
		{...props}
	>
		<Text
		opacity={active ? 0 : 1}
		transition="opacity"
		
		transitionDuration={fIn}
		transitionDelay={active ? 0 : fOut}
		position="absolute" >
			<FontAwesomeIcon 	
			icon={props.icon} />
		</Text>
		<Text
		opacity={active ? 1 : 0}
		transition="opacity"

		transitionDuration={fIn}
		transitionDelay={active ? fOut : 0}
		position="absolute" >
			{props.name}
		</Text>
	</Button>
	)
};

NavLink.displayName = "NavLink";
