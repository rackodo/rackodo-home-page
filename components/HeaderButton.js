import { Icon, IconButton, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderButton( { icon, href } ) {
	return(
		<Link
			href={href}
			h="100%"
			isExternal
			aspectRatio={1} 
		>
			<IconButton
			icon={
				<FontAwesomeIcon 
					icon={icon} 
					size="2x"
				/>
			}
			height="100%"
			aspectRatio={1}
			borderRadius={0} 
			color="blue.200" 
			bg="black" 
			border="1px solid" 
			borderColor="blue.300"
			_hover={{ bg: "blue.700", color: "blue.100"}}
			/>
		</Link>
	)
}