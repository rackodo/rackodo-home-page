import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";

export default function ExtLink({children, ...props}) {
	return(
		<span style={{color: 'white'}}><Link {...props} isExternal>{children}</Link><ExternalLinkIcon mx='2px' /></span>
	)
}