import { Heading } from '@chakra-ui/react'
import styles from '../styles/section.module.css'

export default function Section({ title, layer, children }) {

	title = (title == undefined) ? "Section" : title
	var element = ""
	switch (layer) {
		case 1:
			element = <Heading as="h1">{title}</Heading>
			break
		case 2:
			element = <Heading as="h2">{title}</Heading>
			break
		case 3:
			element = <Heading as="h3">{title}</Heading>
			break
		default:
			element = <Heading as="h1">{title}</Heading>
	}


	return(
		<div className={styles.wrapper}>
			{element}
			<div className={styles.contentWrapper}>{children}</div>
		</div>
	)
}