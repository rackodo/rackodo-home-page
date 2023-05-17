import { Box } from "@chakra-ui/react";

const Section = (props) => {
	return(
		<Box
		w="100vw"
		h="100vh"
		p="20px"
		paddingTop="50px"
		{...props} >
			{props.children}
		</Box>
	)
}

export default Section