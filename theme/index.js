import { extendTheme } from "@chakra-ui/react";

import colors from './colors'

import global from "./globals";

import Button from "./components/button";

const theme = extendTheme({
	colors,
	styles: {
		global
	},
	components: {
		Button,
	}
})

export default theme