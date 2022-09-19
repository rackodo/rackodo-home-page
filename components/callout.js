import { Box } from '@chakra-ui/react'
import styles from '../styles/callout.module.css'

export default function Callout({children}) {
	return (
		<Box as="div" className={styles.container}>
			{children}
		</Box>
	)
} 