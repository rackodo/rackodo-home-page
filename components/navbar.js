import { 
	Button, 
	HStack, 
	Text } from "@chakra-ui/react";

import React from "react";

import { useRouter } from "next/router";

import NextLink from 'next/link';

import { 
	faHome, 
	faNoteSticky, 
	faPencil } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
	return (
		<HStack
		position="fixed"
		width="100vw"
		backdropFilter="blur(10px)"
		h="50px"
		zIndex="50"
		fontSize={{base: "14px", md: "initial"}}
		paddingX={{base: "10px", md: "20px"}}
	>
		<HStack flex={{base: "40%", md: "50%"}}>
			<NextLink href="/" passHref legacyBehavior>
				<NavLink
					icon={faHome}
					name="Home"
					id="home"
				/>
			</NextLink>
			<NextLink href="/resume" passHref legacyBehavior>
				<NavLink
					icon={faPencil}
					name="Resume"
					id="resume"
				/>
			</NextLink>
			<NextLink href="/portfolio" passHref legacyBehavior>
				<NavLink
					icon={faNoteSticky}
					name="Portfolio"
					id="portfolio"
				/>
			</NextLink>
		</HStack>
		<HStack 
		flex={{base: "20%", md: "50%"}}
		justifyContent="right" >
			<NextLink href="mailto:rackodo.business@gmail.com" passHref legacyBehavior>
				<Button
					variant="outline"
				>
					Contact Me
				</Button>
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
