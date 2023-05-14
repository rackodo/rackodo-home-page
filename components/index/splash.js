import { Box, Button, Container, Flex, Grid, GridItem, Heading, IconButton, Image, keyframes } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimate } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const bg = keyframes`
	from {background-position: 0% center;}
	to {background-position: -200% center}
`

export default function Splash() {
	return(
		<>
			<Box
			width="100%"
			h="calc(100% - 50px)"
			overflow="hidden"
			position="absolute"
			zIndex={-1}
			bg="linear-gradient(to right, rgb(26, 54, 93), rgb(44, 82, 130), rgb(26, 54, 93))"
			bgSize="200%"
			animation={`${bg} infinite 10s linear`} />
			<Grid

			templateColumns={{sm: '52% 48%', base: 'initial'}}
			templateRows={{sm: 'initial', base: '30% 70%'}}
			width="100vw"
			position="relative"
			zIndex={0}
			gap="5px"
			overflowY="hidden"
			minH={{md: "600px", sm: "100px"}}
			h="calc(100vh - 50px)"
			fontSize="xl"
			overflowX="hidden"
			placeItems="center" >
				<GridItem
				rowStart={{base: 2, sm: 1}}
				placeSelf={{base: "center center", sm: "center flex-end"}}
				w="100%"
				padding="30px"
				maxW="500px" >
					<Heading as="h1">Bash Elliott</Heading>
					<Heading as="h3"fontSize="xl">Website Designer & Developer (They/Them)</Heading>
					<br/>
					<Flex gap="10px">
						<Link href="mailto:rackodo.business@gmail.com" passHref legacyBehaviour>
							<Button flex="80%" target="_blank">
								Contact Me
							</Button>
						</Link>
						<Link href="https://github.com/rackodo" passHref legacyBehaviour>
							<a target="_blank">
								<IconButton 
								variant="solid" 
								fontSize="2xl"
								icon={<FontAwesomeIcon icon={faGithub} />} />
							</a>
						</Link>
						<Link href="https://twitter.com/rackodo" passHref legacyBehaviour>
							<a target="_blank">
								<IconButton 
								variant="solid" 
								fontSize="2xl"
								icon={<FontAwesomeIcon icon={faTwitter} />} />
							</a>
						</Link>
					</Flex>
				</GridItem>
				<GridItem
				padding="50px"
				paddingTop={{base: "200px", sm: "50px"}}
				display="flex"
				alignItems="center"
				justifyContent="center"
				placeSelf={{base: "center center", sm: "center flex-start"}} >
					<Image
					display="block"
					position="relative"
					borderRadius="100%"
					src="profile.png"
					fallbackSrc="http://via.placeholder.com/300"
					alt="placeholder"
					objectFit="contain"
					boxSize={{base: "75%", sm: "100%"}}
					maxH="300px"
					maxW="300px" />
				</GridItem>
			</Grid>
		</>
	)
}
