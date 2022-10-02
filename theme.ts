import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/react"

const theme = extendTheme ({
	initialColorMode: 'dark',
	useSystemColorMode: true,
		colors: {
			light: {
				100: '#172f45',
				150: '#172f4588',
				200: '#1b5080',
				250: '#1b508088',
				300: '#1e6db3',
				400: '#1c7ed4',
				500: '#61b5ff'
			},
			dark: {
				100: '#36abff',
				150: '#36abff88',
				200: '#82cbff',
				250: '#82cbff88',
				300: '#9ed7ff',
				400: '#c9e9ff',
				500: '#e0f2ff'
			}
		},
	components: {
		Link: {
			baseStyle: (props: StyleFunctionProps) => ({
				fontWeight: 'bold',
				color: props.colorMode === 'light' ? 'light.400' : 'dark.200'
			})
		},
		Button: {
			baseStyle: {
				fontWeight: 'normal',
			},
			variants: {
				default: (props: StyleFunctionProps) => ({
					bg: props.colorMode === 'light' ? 'dark.400' : 'light.400',
					_hover: {
						bg: props.colorMode === 'light' ? 'dark.200' : 'light.200'
					}
				}),
				IconButton: (props: StyleFunctionProps) => ({
					bg: props.colorMode === 'light' ? 'dark.300' : 'light.300',
					_hover: {
						bg: props.colorMode === 'light' ? 'dark.100' : 'light.100'
					}
				})
			},
			defaultProps: {
				variant: 'default'
			}
		}
	}
})

export default theme