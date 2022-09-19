import styles from '../styles/home.module.css'
import Navbar from '../components/navbar'
import Section from '../components/section'
import Table, {TableItem} from '../components/table'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Resume() {
	return(
		<div>
			<main className={styles.content}>
				<Section title="Skills" layer={1}>
					<Section title="Coding" layer={2}>
						<p>9 years of experience - Personal Projects</p>
						<p>Known Programming Languages: Python, Javascript
							<br/>Known Markup and Stylesheet Languages: HTML, CSS, Next.JS</p>

						<Table>
							<TableItem
							title="Python"
							content="Somewhat Advanced" />
							<TableItem
							title="Javascript"
							content="Somewhat Intermediate" />
							<TableItem
							title="HTML"
							content="Advanced" />
							<TableItem
							title="CSS"
							content="Advanced" />
							<TableItem
							title="Next.JS"
							content="Intermediate" />
							<TableItem
							title="React"
							content="Intermediate" />
						</Table>
					</Section>
					<Section title="Video Editing" layer={2}>
						<p>3 years of experience - Personal Projects</p>

						<p>Known Video Editing Software: Adobe Premiere Pro, Adobe After Effects
						<br/>Known Audio Editing Software: Audacity</p>

						<Table>
							<TableItem title="Adobe After Effects"	content="Somewhat Basic" />
							<TableItem title="Adobe Premiere Pro"	content="Somewhat Advanced" />
							<TableItem title="Audacity"	content="Somewhat Intermediate" />
							<TableItem title="DaVinci Resolve"	content="Somewhat Intermediate" />
						</Table>
					</Section>
					<Section title="Image Editing" layer={2}>
						<p>5 years of experience - Personal Projects</p>

						<p>Known Image Editing Software: Adobe Photoshop</p>

						<Table>
							<TableItem title="Adobe Photoshop" content="Somewhat Intermediate" />
						</Table>
					</Section>
					<Section title="System Administration" layer={2}>
						<p>1 year of experience - Personal Projects</p>

						<p>Known Desktop Operating Systems: Windows, Ubuntu Linux, Arch Linux
						<br/>Known Server Operating Systems: Ubuntu Linux</p>
						<Table>
							<TableItem title="Windows" content="Experienced" />
							<TableItem title="Ubuntu Linux"	content="Intermediate" />
							<TableItem title="Arch Linux"	content="Somewhat Basic" />
						</Table>
					</Section>
				</Section>
			</main>
		</div>
	)
}