import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import InlineLink from './inlinelink'
import { Menu, MenuButton, MenuItem, MenuList, Spacer, Button, useColorMode } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

import links from './links.json'
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
						<MenuButton className={styles.button} as={Button}><HamburgerIcon/></MenuButton>
						<MenuList>
							<Link href="/" passHref><MenuItem as="a">Home</MenuItem></Link>
							{links.map((link) =>
								<Link href={link.href} key={link.name} passHref><MenuItem as="a"> {link.name} </MenuItem></Link>
							)}
						</MenuList>
					</Menu>
				</div>
				<Button className={[styles.themeButton, styles.button].join(" ")} onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
			</div>
		</nav>
	)
}

function NavbarTitle() {
	return (
		<Link href="/">
			<a>
				<div className={styles.titleContainer}>
					<div className={[styles.titleText, styles.underline].join(" ")}>
						Rackodo
					</div>
				</div>
			</a>
		</Link>
	)
}

function NavbarLink({name, href, target}) {
	return (
		<Link href={href}>
			<a target={target} className={[styles.linkContainer, styles.underline].join(' ')}>
				<div>
					{name}
				</div>
			</a>
		</Link>
	)
}