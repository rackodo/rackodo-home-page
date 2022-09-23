import InlineLink from "../components/inlinelink";
import Section from "../components/section";
import WorkGallery, { WorkItem } from "../components/works";
import styles from '../styles/home.module.css'

export default function Portfolio() {
	return(
		<div>
			<main className={styles.content}>
				<Section title="Works">
					<WorkGallery>
						<WorkItem name="Card Page Design" src="/images/project-logos/card-page.png">
							<p>
								Small but simple design for a card page using NextJS.
							</p>
						</WorkItem>
						<WorkItem name="Login Page Design" src="/images/project-logos/login-page.png">
							<p>
							Simple and sleek design for a login page using NextJS.
							</p>
						</WorkItem>
						<WorkItem name="Commissions Page" src="/images/project-logos/euphoria-comms-page.png">
							<p>Commissions page for my friend, <InlineLink href="https://twitter.com/you_go_doe">Euphoria</InlineLink>, using NextJS.</p>
						</WorkItem>
					</WorkGallery>
				</Section>
			</main>
		</div>
	)
}