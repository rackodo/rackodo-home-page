import { Box, Circle, Container, Flex, HStack, Link } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const home = useRef(null);
  const resume = useRef(null);
  const portfolio = useRef(null);

  const [active, setActive] = useState(home);

  function handleActive(e, item) {
	console.log(e)
  }

  useEffect(() => {
    console.log(home);
    home.current.active = (home === active);
    resume.current.active = (resume === active);
    portfolio.current.active = (portfolio === active);
  }, [active]);

  return (
    <HStack
      bg="red.100"
      h={50}
      alignItems="center"
      justifyContent="center"
      gap="2.5px"
      paddingX="5px"
    >
      <NavLink
        name="Home"
        href="/"
        id="home"
        ref={home}
		data-active={false}
        onClick={(val) => handleActive(val.target)} active={false}
      />
      <NavLink
        name="Resume"
        href="/resume"
        id="resume"
        ref={resume}
		data-active={false}
        onClick={(val) => handleActive(val.target)} active={true}
      />
      <NavLink
        name="Portfolio"
        href="/portfolio"
        id="portfolio"
        ref={portfolio}
		data-active={false}
        onClick={(val) => {handleActive(val.target)}} active={false}
      />
      <NavLink
        name="Contact Me"
        href="mailto:rackodo.business@gmail.com"
      />
    </HStack>
  );
}

const NavLink = React.forwardRef((props, ref) => (
  <Circle
    as={"button"}
    ref={ref}
    textDecoration="None!important"
    color="initial"
    height="40px"
    flex={props.active ? "100%" : "none"}
    bg={props.active ? "red.200" : "initial"}
    alignItems="center"
    justifyContent="center"
    onClick={props.onClick}
    p={0}
  >
    {props.name}
  </Circle>
));

NavLink.displayName = "NavLink";
