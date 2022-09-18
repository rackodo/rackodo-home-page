import styles from '../styles/table.module.css'

export default function Table( { children } ) {
	return(
		<table className={styles.wrapper}>
			<tbody>
				{children}
			</tbody>
		</table>
	)
}

export function TableItem( { title, content } ) {
	return(
		<tr className={styles.itemWrapper}>
			<th className={styles.itemTitle}>
				{title}
			</th>
			<td className={styles.itemContent}>
				{content}
			</td>
		</tr>
	)
}