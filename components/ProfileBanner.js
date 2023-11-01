import { Flex, Heading, IconButton, Spacer, Link, Box, Grid, GridItem, Image } from "@chakra-ui/react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function ProfileBanner({...props}) {
	return(
		<Flex 
		{...props} 
		backgroundColor="hsla(286, 12%, 21%, 0.25)" 
		backdropFilter="blur(10px)"
		alignItems="center" >
			<Image src="profile.jpeg" alt="Rackodo" width="56px" height="56px" mr="10px" borderRadius={100} filter="sepia(100%) hue-rotate(270deg) brightness(0.8)"/>
			<Box flex="100%" pos="relative" top="-2.5px">
				<Flex>
					<Heading as='h1' size='xl' fontFamily={"VT323"}>Bash Elliott</Heading>
					<Spacer minW="8px"/>
					<IconButton 
					as={Link} 
					variant="link" 
					icon={
					<FontAwesomeIcon 
					color="pink" 
					size="2xl" 
					icon={faTwitterSquare}/>
				} 
					href="https://x.com/silverbash_" 
					target="_blank" />
					<IconButton 
					as={Link} 
					variant="link" 
					icon={
					<FontAwesomeIcon 
					color="pink" 
					size="2xl" 
					icon={faGithubSquare}/>
				} 
					href="https://github.com/rackodo" 
					target="_blank" />
				</Flex>
				<Flex>
					<Heading as='h3' size='md' fontFamily={"VT323"}>Website Developer</Heading>
					<Spacer minW="8px"/>
					<Heading as='h3' size='md' fontFamily={"VT323"}>(They/Them)</Heading>
				</Flex>
			</Box>
		</Flex>
	)
}