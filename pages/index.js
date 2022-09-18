import styles from '../styles/home.module.css'
import Navbar from '../components/navbar'
import Callout from '../components/callout'
import ProfileCard from '../components/profilecard'
import Section from '../components/section'
import Footer from '../components/footer'
import Head from 'next/head'
import InlineLink from '../components/inlinelink'

export default function Home() {
	return (
		<>
			<Head>
				<title>Bash Elliott</title>
			</Head>
			<div className={styles.wrapper}>
				<Navbar />
				<main className={styles.content}>
					<Callout>
						<p>Hi, I&apos;m a frontend web developer based in Australia!</p>
					</Callout>
					<ProfileCard
					img="/images/logo.png"
					title="Bash Elliott"
					desc="High School Graduate (They/Them)" />
					<Section title="About Bash">
						<p className={styles.p}>Bash is a soon-to-be high school graduate with a passion for computing, robotics, software development and website design. They&apos;ve tried their hand at a variety of challenges in the programming field, including game development and app development, and even practices some sys-admin knowledge with their two servers at home. When not online, they enjoy watching films and exploring their neighbourhood.</p>
						<p className={styles.p}>Bash also practices creative writing in their spare time and occasionally makes videos for their YouTube channel <InlineLink href="https://www.youtube.com/channel/UChiRebGN9a1oSoG_QZj6LjQ" target="_blank">Rackodo</InlineLink>. They also enjoy playing guitar recreationally.</p>
					</Section>
					<Section title="Works">
					
					</Section>
				</main>
				<Footer />
			</div>
		</>
	)
}