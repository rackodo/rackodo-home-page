import { 
	Box, 
	Button, 
	Flex, 
	Grid, 
	GridItem, 
	Heading, 
	IconButton, 
	Image } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
	faGithub, 
	faTwitter } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

import GradientBG from "../gradientBG";

export default function Splash() {
	return(
		<Box as={"div"} width="100vw" height="calc(100vh)" display="block" position="relative">
			<GradientBG />
			<Grid
			templateColumns={{sm: '52% 48%', base: 'initial'}}
			templateRows={{sm: 'initial', base: '50% 50%'}}
			width="100vw"
			position="relative"
			zIndex={0}
			gap="5px"
			overflowY="hidden"
			minH={{md: "100%", sm: "100px"}}
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
					<Flex gap="10px" flexWrap="wrap">
						<Link href="/projects" passHref legacyBehaviour>
							<Button flex="50%" target="_blank" >
								Projects
							</Button>
						</Link>
						<Link href="mailto:rackodo.business@gmail.com" passHref legacyBehaviour>
							<Button flex="50%" target="_blank">
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
				padding={{base: "50px", sm: "20px"}}
				paddingTop={{base: "200px", sm: "50px"}}
				display="flex"
				alignItems="center"
				justifyContent="center"
				placeSelf={{base: "center center", sm: "center flex-start"}} >
					<Image
					display="block"
					position="relative"
					borderRadius="53% 47% 34% 66% / 56% 30% 70% 44% "
					src="profile.png"
					fallbackSrc="http://via.placeholder.com/300"
					alt="placeholder"
					objectFit="contain"
					boxSize="100%"
					maxH="400px"
					maxW="400px" />
				</GridItem>
			</Grid>
		</Box>
	)
}