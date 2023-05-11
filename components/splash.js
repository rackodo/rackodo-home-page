import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimate } from 'framer-motion'

export default function Splash() {
	return(
		<Grid
		templateColumns='1fr'
		templateRows='1fr'

		w="100vw"
		h="calc(100vh - 50px)"
		fontSize="xl" >
			<GridItem
			colSpan={2}
			display="flex"
			alignItems="center"
			justifyContent="center" >
				<Button
				variant={'solid'}
				fontSize="3xl" 
				padding={10} >
					<Text>Prepare to be <i><u>AMAZED</u></i>.</Text>
				</Button>
			</GridItem>
		</Grid>
	)
}
