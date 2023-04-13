import { Box, Circle, Container, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";

import { useRouter } from "next/router";
import NextLink from 'next/link';


export default function Navbar() {

  return (
    <HStack
      bg="red.100"
      h={50}
      alignItems="center"
      justifyContent="center"
      gap="2.5px"
      paddingX="5px"
    >
      <NextLink href="/" passHref legacyBehavior>
        <NavLink
          name="Home"
          id="home"
        />
      </NextLink>
      <NextLink href="/resume" passHref legacyBehavior>
        <NavLink
          name="Resume"
          id="resume"
        />
      </NextLink>
      <NextLink href="/portfolio" passHref legacyBehavior>
        <NavLink
          name="Portfolio"
          id="portfolio"
        />
      </NextLink>
      <NextLink href="mailto:rackodo.business@gmail.com" passHref legacyBehavior>
        <NavLink
          name="Contact Me"
        />
      </NextLink>
    </HStack >
  );
}

const NavLink = React.forwardRef((props, ref) => {
  const router = useRouter();
  return (
    <Circle
      as={"button"}
      ref={ref}
      textDecoration="None!important"
      color="initial"
      height="40px"
      flex={props.href == router.pathname ? "100%" : "none"}
      bg={props.href == router.pathname ? "red.200" : "initial"}
      alignItems="center"
      justifyContent="center"
      onClick={props.onClick}
      p={0}
    >
      {props.name}
    </Circle>
  )
});

NavLink.displayName = "NavLink";
