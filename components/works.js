import { Box, Heading, Text } from '@chakra-ui/react'
import styles from '../styles/works.module.css'

export default function WorkGallery({ children }) {
	return(
		<Box as="div" className={styles.wrapper}>
			<Text>WorkGallery</Text>
			{children}
		</Box>
	)
}

export function WorkItem({ name, src, children }) {
	return(
		<Box as="div" className={styles.itemWrapper}>
			<Box as="div" className={styles.imageContainer}>

			</Box>
			<Box as="div" className={styles.textContainer}>
				<Heading as="h3">{name}</Heading>
				<Text>{children}</Text>
			</Box>
		</Box>
	)
}