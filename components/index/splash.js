import { 
	Box, 
	Button, 
	Flex, 
	Grid, 
	GridItem, 
	Heading, 
	IconButton, 
	Image, 
	keyframes } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faGithub, 
	faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const bg = keyframes`
	from {background-position: 0% center;}
	to {background-position: -200% center}
`

export default function Splash() {
	return(
		<Box as={"div"} width="100vw" height="calc(100vh)" display="block" position="relative">
			<Box
			width="100%"
			height="100%"
			overflow="hidden"
			position="absolute"
			zIndex={-1}
			bg="linear-gradient(to right, rgb(26, 54, 93), rgb(44, 82, 130), rgb(26, 54, 93))"
			bgSize="200%"
			animation={`${bg} infinite 10s linear`} />
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
		</Box>
	)
}