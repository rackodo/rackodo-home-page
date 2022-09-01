import styles from '../styles/callout.module.css'

export default function Callout({children}) {
	return (
		<div className={styles.container}>
			{children}			
		</div>
	)
} 