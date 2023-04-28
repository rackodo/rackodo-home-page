import { Circle, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";

import { useRouter } from "next/router";
import NextLink from 'next/link';
import { faEnvelope, faHome, faNoteSticky, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {

	return (
		<HStack
		bg="red.100"
		h="50px"
		alignItems="center"
		justifyContent="center"
		gap="0px"
		fontSize={{base: "14px", md: "initial"}}
		spacing="5px"
		paddingX={{base: "5px", md: "20%"}}
	>
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
		<Spacer paddingLeft="10px"/>
		<NextLink href="mailto:rackodo.business@gmail.com" passHref legacyBehavior>
		<NavLink
			icon={faEnvelope}
			name="Contact"
			maxWidth="40px"
			minWidth="40px"
		/>
		</NextLink>
	</HStack >
	);
}

const NavLink = React.forwardRef((props, ref) => {
	const router = useRouter();
	let active = props.href == router.pathname ? true : false
	let fOut = ".3s"
	let fIn = ".5s"
	return (
	<Circle
		as={"button"}
		ref={ref}
		textDecoration="None!important"
		color="initial"
		height="40px"
		flex={active ? "100%" : "40px"}
		bg="red.200"
		minWidth="40px"
		onClick={props.onClick}
		transitionProperty="flex"
		transitionDuration={fIn}
		transitionTimingFunction="ease-out"
		fontWeight="bold"
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
		transitionDelay={active ? fOut : 0} >{props.name}</Text>
	</Circle>
	)
});

NavLink.displayName = "NavLink";
