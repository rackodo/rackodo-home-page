import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Square, Text, Spacer } from '@chakra-ui/react'


export default function NavBar() {
	return (
		<nav className={styles.navbarWrapper}>
			<div className={styles.navbarContainer}>
				<NavbarTitle />
				<Spacer/>
				<NavbarLinks />
			</div>
		</nav>
	)
}

function NavbarTitle() {
	return (
		<Link href="/">
			<a>
				<div className={styles.titleContainer}>
					<div className={styles.titleText}>
						Rackodo
					</div>
				</div>
			</a>
		</Link>
	)
}

function NavbarLinks() {
	return (
		<div className={styles.linksContainer}>
			<NavbarLink
			name="Resume"
			href="/resume" />
			<NavbarLink
			name="Contact"
			href="mailto:bashelliott@gmail.com" />
			<NavbarLink
			name="Source"
			href="https://github.com/rackodo/rackodo-home-page"
			target="_blank" />
			{/* <NavbarLink
			name="[TEST] 404 Page"
			href="/notarealpage" /> */}
		</div>
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