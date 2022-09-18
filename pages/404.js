import styles from '../styles/home.module.css'
import Navbar from '../components/navbar'
import Callout from '../components/callout'

import InlineLink from '../components/inlinelink'
import Head from 'next/head'

export default function FourOhFour() {
	return(
		<>
			<Head>
				<title>Bash Elliott&apos;s... wait what?</title>
			</Head>
			<div className={styles.wrapper}>
				<Navbar />
				<div className={styles.content}>
					<Callout>Oop! That&apos;s not a real page.<br/><InlineLink href="/">Let&apos;s get back to normal.</InlineLink></Callout>
				</div>
			</div>
		</>
	)
}