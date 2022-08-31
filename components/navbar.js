import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Square, Text, Spacer } from '@chakra-ui/react'


export default function NavBar() {
	return (
		<nav className={styles.navbarWrapper}>
			<Flex h="64px" alignItems="center">
				<NavbarTitle />
				<Spacer />
				<NavbarBreaker />
				<NavbarLinks />
			</Flex>
		</nav>
	)
}

function NavbarTitle() {
	return (
		<Link href="/">
			<a>
				<Box className={styles.titleContainer}>
					{/* <Square bg="red.100" className={styles.titleLogo} size='64px'>
						Logo
					</Square> */}
					<Image 
					src="/favicon.ico"
					width={48}
					height={48}
					alt="vercel"
						className={styles.titleLogo} />
					<Text className={styles.titleText}>
						Rackodo
					</Text>
				</Box>
			</a>
		</Link>
	)
}

function NavbarBreaker() {
	return (
		<div className={styles.breaker} />
	)
}

function NavbarLinks() {
	return (
		<Flex className={styles.linksContainer}>
			<NavbarLink
			name="Works"
			href="/works" />
			<NavbarLink
			name="Contact"
			href="mailto:bashelliott@gmail.com" />
		</Flex>
	)
}

function NavbarLink({name, href}) {
	return (
		<Link href={href}>
			<a className={styles.linkContainer}>
				<Box>
					{name}
				</Box>
			</a>
		</Link>
	)
}