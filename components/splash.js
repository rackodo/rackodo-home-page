import { Box, Grid, GridItem, Text, keyframes } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimate } from 'framer-motion'

export default function Splash() {
	return(
		<Grid
		templateColumns='3fr 6fr'
		templateRows='120px 3fr 2fr'

		w="100vw"
		h="calc(100vh - 50px)"
		fontFamily="Roboto Mono, monospace"
		fontSize="xl" >
			<GridItem
			colSpan={2}
			bg="yellow.100"
			display="flex"
			alignItems="center"
			justifyContent="center"
			fontFamily="Roboto Mono, monospace"
			fontSize="2xl" >
				<Text>Hi, my name is <b>Bash</b>.</Text>
			</GridItem>
			<GridItem 
			bg="red.100"
			alignItems="center"
			justifyContent="right"
			display="grid" >
				I am a
			</GridItem>
			<GridItem 
			padding="2"
			paddingBottom="38px"
			bg="blue.100"
			alignItems="center"
			justifyContent="left"
			display="flex"
			position="relative"
			fontWeight="bold" >
				<SwitchingText />
			</GridItem>
		</Grid>
	)
}

function SwitchingText() {
	const [ current, setCurrent ] = useState(1)
	const [ next, setNext ] = useState(2)

	const [ scope, animate ] = useAnimate()
	
	const cRef = useRef()
	const nRef = useRef()

	const titles = [
		"web developer.",
		"web designer.",
		"content creator.",
		"writer.",
		"reader."
	]

	const currentTitle = useRef(titles[0])
	const nextTitle = useRef(titles[1])

	useEffect(() => {
		const anim = setInterval(async () => {
			animate(cRef.current, {
				translateY: ["0vh", "-8vh"],
				scale: [1, .5],
				opacity: [1, 0]
			},
			{
				duration: 1
			})

			animate(nRef.current, {
				translateY: ["8vh", "0vh"],
				scale: [.5, 1],
				opacity: [0, 1]
			},
			{
				duration: 1
			})
		}, 1500)

		return () => clearInterval(anim)
	})

	useEffect(() => {
		const switching = setInterval(async () => {

			setNext((next + 1) % titles.length);
			setCurrent((current + 1) % titles.length);

			// Set titles
			nextTitle.current = titles[next];
			currentTitle.current = titles[current];

		}, 1500)
		
		return () => clearInterval(switching)
	}, [current, next])

	return(
		<motion.div scope={scope}>
			<motion.div
			ref={cRef}
			style={{ position: 'absolute', transformOrigin: 'left' }}
			initial={{
				translateY: "0vh",
				scale: "100%",
				opacity: 1
			}} > {currentTitle.current} </motion.div>
			<motion.div
			ref={nRef}
			style={{ position: 'absolute', transformOrigin: 'left' }}
			initial={{
				translateY: '8vh',
				scale: '50%',
				opacity: 0
			}} > {nextTitle.current} </motion.div>
		</motion.div>
	)
}