import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../styles/works.module.css'

export default function WorkGallery({ children }) {
	return(
		<div className={styles.wrapper}>
			{children}
		</div>
	)
}

export function WorkItem({ name, src, href, children }) {
	return(
		<div className={styles.itemWrapper}>
			<div className={styles.itemImage}>
				<Image
				src={src}
				layout="fill"
				objectFit='cover'
				alt={name} />
			</div>
			<div className={styles.itemText}>
				<Heading as="h3">{name}</Heading>
				{children}
			</div>
		</div>
	)
}