/* eslint-disable react-hooks/rules-of-hooks */
import { extendTheme, useColorModeValue } from "@chakra-ui/react";

// https://coolors.co/d0f2ff-87dfff-77cae8-67b4d0-579eb8-4788a0-377388-275d70-174758-073140

const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
		cssVarPrefix: 'ck'
	},
	semanticTokens: {
		colors: {
			bg: {
				default: '#D0F2FF',
				_dark: '#073140'
			},
			text: {
				default: '#073140',
				_dark: '#D0F2FF'
			},
			primary: {
				default: '#275D70',
				_dark: '#87DFFF'
			},
			secondary: {
				default: '#377388',
				_dark: '#77CAE8'
			},
			tertiary: {
				default: '#579EB8',
				_dark: '#4788A0'
			},
			button: {
				default: '#87DFFF',
				_dark: '#174758'
			},
			'themeButton.bg': {
				default: 'purple.400',
				_dark: 'yellow.400',
			},
			'themeButton.text': {
				default: 'purple.800',
				_dark: 'yellow.800'
			}
		},
	},
	components: {
		Button: {
			variants: {
				base: {
					bg: 'button',
					color: 'text'
				},
				themeButton: {
					bg: 'themeButton.bg',
					color: 'themeButton.text'
				}
			},
			defaultProps: {
				variant: 'base'
			}
		}
	}
})

export default theme