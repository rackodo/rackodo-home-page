import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/react"

const theme = extendTheme ({
	initialColorMode: 'dark',
	useSystemColorMode: true,
	components: {
		NavLink: {
			variants: {
				inactive: {

				},
				active: {

				}
			},
			defaultProps: {
				variant: 'inactive'
			}
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