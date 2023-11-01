import { Box, Divider, Flex, Grid, } from "@chakra-ui/react"
import ProfileBanner from "../components/ProfileBanner"

export default function Main({ children }) {
	return(
		<Box
			backgroundColor='hsl(286, 12%, 21%)'>
			<Box
			w="100dvw"
			minH="100dvh"
			backgroundColor='hsl(286, 12%, 21%)' >
				<ProfileBanner boxShadow="0px 0px 15px black" position="sticky" padding="10px" marginBottom="10px" top="0"/>
				<Box display="block" width="100%" wordBreak="break-word"
				maxW="600px" margin="auto" padding="20px">
					<Box>{children}</Box>
				</Box>
			</Box>
		</Box>
	)
}