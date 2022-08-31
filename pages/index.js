import styles from '../styles/home.module.css'
import Navbar from '../components/navbar'
import Callout from '../components/callout'

export default function Home() {
	return (
		<div>
			<Navbar />
			<Callout>
				<p>Hi! I&apos;m an aspiring frontend website developer based in Australia!</p>
			</Callout>
		</div>
	)
}