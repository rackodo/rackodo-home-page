import { Box, Grid } from "@chakra-ui/react";

export default function Main({ children }) {
	return(
		<Grid
		w="100vw"
		h="calc(100vh - env(safe-area-inset-bottom))"
		alignItems="center"
		justifyContent="center" >
			<Grid
			minH="300px"
			maxW="90vw"
			boxSizing="border-box"
			padding="20px"
			alignItems="center"
			justifyContent="center"
			border="1px solid black" >
				<Box display="block" width="100%" wordBreak="break-word">{children}</Box>
			</Grid>
		</Grid>
	)
}