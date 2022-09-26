import {
	Box,
	Flex,
	Heading,
	Image,
	Text
} from "@chakra-ui/react";

export default function ProfileCard() {
	return(
		<Flex
		alignItems="center"
		justifyContent="center"
		bg="blue.300"
		p={4}
		borderRadius={15}
		gap={4}
		wrap="wrap" >
			<Box p={0} flex={{base: "100%", sm: "none"}} display="flex" justifyContent={"center"}>
				<Image
				src="/images/bluehair.JPG"
				objectFit={"cover"}
				borderRadius="full"
				alt="wot"
				boxSize={32} />
			</Box>
			<Box textAlign={{base: "center", sm: "left"}}>
				<Heading>Bash Elliott</Heading>
				<Text>High School Graduate (They/Them)</Text>
			</Box>
		</Flex>
	)
}