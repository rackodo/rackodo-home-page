import { Box } from "@chakra-ui/react";

const Section = (props) => {
	return(
		<Box
		w="100vw"
		h="calc(100vh - 50px)"
		p="20px"
		{...props} >
			{props.children}
		</Box>
	)
}

export default Section