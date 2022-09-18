import styles from '../styles/profilecard.module.css'
import Image from 'next/image'

export default function ProfileCard({ img, title, desc }) {
	return(
		<div className={styles.wrapper}>
			<div className={styles.textContainer}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{desc}</div>
			</div>
			<div className={styles.imageWrapper}>
				<Image
				src={img}
				alt={title}
				width={128}
				height={128}
				className={styles.image} />
			</div>
		</div>
	)
}