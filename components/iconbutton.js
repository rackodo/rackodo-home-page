import { forwardRef, Box, BoxProps } from '@chakra-ui/react'

const Card = forwardRef<BoxProps, 'div'>((props, ref) => (
	<Box px='4' py='5' rounded='sm' shadow='lg' ref={ref} {...props} />
))