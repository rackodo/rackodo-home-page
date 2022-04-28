/* Write a navbar Next component */

import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'

const Navbar = () => {
	return (
		<div className="navbar">
			<Script src="//pull.cappuccicons.com/cpf.js" />
			<div className="navbar-container">
				<NavbarLogo />
				<NavbarLinks>
					<NavbarLink 
					href="https://www.youtube.com/channel/UChiRebGN9a1oSoG_QZj6LjQ" 
					icon="cp cp-youtube" />
					<NavbarLink 
					href="https://github.com/raccter" 
					icon="cp cp-github" />
					<NavbarLink 
					href="https://www.instagram.com/bash_elliott/" 
					icon="cp cp-instagram" />
				</NavbarLinks>
			</div>
		</div>
	)
}

const NavbarLogo = () => {
	return (
		<Link href="/">
			<a>
				<Image
					className="navbar-logo-image"
					src="/images/logo.png"
					alt="Logo"
					width={70}
					height={70}
					layout="raw"
				/>
			</a>
		</Link>
	)
}

const NavbarLink = ({href, icon}) => {
	return (
		// eslint-disable-next-line @next/next/link-passhref
		<Link href={href}>
			<div className="cell"><a href={href}><i className={icon}></i></a></div>
		</Link>
	)
}

const NavbarLinks = ({children}) => {
	return (
		<div className="navbar-links">
			{children}
		</div>
	)
}

export default Navbar