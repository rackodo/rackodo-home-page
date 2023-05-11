import { defineStyleConfig } from "@chakra-ui/react"

const Button = defineStyleConfig({
	baseStyle: {
	  fontWeight: 'bold',
	  transitionDuration: '.5s'
	},
	variants: {
		solid: {
			bg: 'blue.300',
			color: 'blue.900',
			_hover: {
				bg: 'blue.200'
			},
			_active: {
				bg: 'blue.500'
			}
		},
		outline: {
			border: '3px solid',

			borderColor: 'blue.300',
			color: 'blue.300',
			_hover: {
				borderColor: 'blue.500',
				color: 'blue.900',
				bg: 'blue.200'
			},
			_active: {
				borderColor: 'blue.600',
				color: 'blue.900',
				bg: 'blue.500'
			}
	  },
	},
	defaultProps: {
	  variant: 'outline'
	},
})

export default Button