import React from "react";
import Section from "../components/section";
import { H1 } from "../components/headings";
import Gallery, { GalleryItem } from "../components/gallery";
import { Link, Text, useColorMode } from "@chakra-ui/react";

export default function Portfolio() {
	const { colorMode, toggleColorMode } = useColorMode()
	return(
		<Section>
			<H1>Portfolio</H1>
			<Text>Click on each image to see the Github repository for the project.</Text>
			<Gallery>
				<GalleryItem name="Commissions Page" href="/private" src="/images/project-logos/euphoria-comms-page.png">
					Commissions page for my friend, <Link href="https://twitter.com/you_go_doe" isExternal>Euphoria</Link>. Uses a column-based design for dividing information into separate sections that can be switched between using the available buttons.
				</GalleryItem>
				<GalleryItem name="Login Page Design" href="https://github.com/rackodo/login-page" src="/images/project-logos/login-page.png" isExternal>
					Login page design that uses dynamic CSS to show when valid information is inside each input field, and when the form is valid overall.
				</GalleryItem>
				<GalleryItem name="Card Page Design" href="https://github.com/rackodo/card-page" src="/images/project-logos/card-page.png" isExternal>
					Simple card page design that contains a brief summary of a person and their social media links. Includes a hue slider that dynamically updates the colours of the card.
				</GalleryItem>
			</Gallery>
		</Section>
	)
}