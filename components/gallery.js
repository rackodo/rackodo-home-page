import { Box, Flex, Image, Link, Stack } from "@chakra-ui/react";
import { H2 } from "./headings";

export default function Gallery({children}) {
	return(
		<Stack
		spacing={8} >
			{children}
		</Stack>
	)
}

export function GalleryItem({src, href, name, children}) {
	return(
		<Flex
		flexWrap={{base: "wrap", sm: "nowrap"}} >
			<Link
			href={href}
			flex={{base: "100%", sm: "30%"}}
			alignItems="center"
			display="flex"
			isExternal >
				<Box
				width={{base: "100%"}}
				borderRadius={15}
				overflow="hidden" >
						<Image
						src={src}
						alt={name}
						width={{base: "100%"}}
						height="150px"
						objectFit="cover"
						transition="transform .15s ease-in-out"
						_hover={{
							transform: 'scale(1.15)'
						}} />
				</Box>
			</Link>
			<Box
			flex={{base: "100%", sm: "70%"}}
			alignItems="center"
			display="flex"
			paddingLeft={{sm: 8}}
			paddingTop={{base: 4, sm: 0}}
			textAlign="justify" >
				<div>
					<H2>{name}</H2>
					{children}
				</div>
			</Box>
		</Flex>
	)
}