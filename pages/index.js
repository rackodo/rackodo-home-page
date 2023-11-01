import { Divider, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function Home() {

	return(
		<div>
			<Heading as='h1' size='xl' fontFamily={"VT323"}>Bash Elliott</Heading>
			<Flex>
				<Heading as='h3' size='md' fontFamily={"VT323"}>Website Developer</Heading>
				<Spacer/>
				<Spacer/>
				<Heading as='h3' size='md' fontFamily={"VT323"}>(They/Them)</Heading>
				</Flex>
			<Divider h="5px"/>
			<Text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
		</div>
	)
}