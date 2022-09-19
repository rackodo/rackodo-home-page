import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import InlineLink from './inlinelink'
import { Menu, MenuButton, MenuItem, MenuList, Spacer, Button, useColorMode, Box, Container, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import links from './links.json'
import { IconContext } from 'react-icons'
// import IconButton from './iconbutton'

export default function NavBar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbarContainer}>
				<NavbarTitle />
				<Spacer/>
				<div className={styles.linksContainer}>
					{links.map((link) =>
						<NavbarLink key={link.name}
						name={link.name}
						href={link.href} />
					)}
				</div>
				<div className={styles.linksMenu}>
					<Menu>
						<MenuButton className={styles.button} as={IconButton} icon={<HamburgerIcon />} />
						<MenuList>
							<Link href="/" passHref><MenuItem as="a">Home</MenuItem></Link>
							{links.map((link) =>
								<Link href={link.href} key={link.name} passHref><MenuItem as="a"> {link.name} </MenuItem></Link>
							)}
						</MenuList>
					</Menu>
				</div>
				<IconButton className={[styles.themeButton, styles.button].join(" ")} onClick={toggleColorMode} variant="themeButton" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
			</div>
		</nav>
	)
}

function NavbarTitle() {
	return (
		<Box as="div">
			<Link href="/" passHref>
				<Container as="a" className={styles.titleContainer}>
					<Container as="div" className={[styles.titleText, styles.underline].join(" ")}>
						Rackodo
					</Container>
				</Container>
			</Link>
		</Box>
	)
}

function NavbarLink({name, href, target}) {
	return (
		<Box as="div">
			<Link href={href} passHref>
				<Container as="a" target={target} className={[styles.linkContainer, styles.underline].join(' ')}>
					{name}
				</Container>
			</Link>
		</Box>
	)
}