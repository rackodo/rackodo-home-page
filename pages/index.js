import styles from '../styles/home.module.css'
import Navbar from '../components/navbar'
import Callout from '../components/callout'

export default function Home() {
	return (
		<div>
			<Navbar />
			<main className={styles.content}>
				<Callout>
					<p>Hi! I&apos;m a frontend website developer based in Australia!</p>
				</Callout>
			</main>
		</div>
	)
}