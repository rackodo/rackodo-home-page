import styles from '../styles/section.module.css'

export default function Section({ title, layer, children }) {

	title = (title == undefined) ? "Section" : title
	var element = ""
	switch (layer) {
		case 1:
			element = <h1>{title}</h1>
			break
		case 2:
			element = <h2>{title}</h2>
			break
		case 3:
			element = <h3>{title}</h3>
			break
		default:
			element = <h1>{title}</h1>
	}


	return(
		<div className={styles.wrapper}>
			{element}
			<div className={styles.contentWrapper}>{children}</div>
		</div>
	)
}