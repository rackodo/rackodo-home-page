import { Box, keyframes } from "@chakra-ui/react";

const bg = keyframes`
	from {background-position: 0% center;}
	to {background-position: -200% center}
`

const GradientBG = ( props ) => {
	return(
		<Box
		width="100%"
		height="100%"
		overflow="hidden"
		position="absolute"
		zIndex={-1}
		bg="linear-gradient(to right, rgb(26, 54, 93), rgb(44, 82, 130), rgb(26, 54, 93))"
		bgSize="200%"
		animation={`${bg} infinite 10s linear`}
		{...props} />
	)
}

export default GradientBG