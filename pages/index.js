import { Box, Heading, Link, Text } from "@chakra-ui/react";
import ExtLink from "../components/ExtLink";

export default function Home() {

	return(
		<Box>
			<Heading size="xl" fontFamily="VT323" fontStyle="italic">What do you want to be when you grow up?</Heading>
			<br/>
			<Text>
				When asked that question, they said &ldquo;I want to fix computers!&rdquo; This has propogated into a deep passion for technology, video games and the Information Technology industry at large.
			</Text>
			<br/>
			<Text>
				Bash Elliott, sometimes referred to by their online pseudonym &ldquo;Rackodo&rdquo;, is a hobbyist website designer and developer. After graduating from high school in 2022, they spent the next few months struggling with an overwhelming fear of growing up and taking several steps back to re-examine their career choices... before going back to making websites and bad games.
			</Text>
			<br/>
			<Text>Bash&apos;s begun development on their first public web project, their personal website, on the 27th of April, 2022. Since then, they&apos;ve developed five iterations of their site over the next year and a half. Among these updates, Bash also busied themself with other projects, such as <ExtLink href="https://github.com/rackodo/py-github-gui">py-github-gui</ExtLink> and <ExtLink href="https://github.com/rackodo/acPieces">aesthetic.computer pieces</ExtLink>, to expand on their abilities with a suite of programming languages and platforms.</Text>
		</Box>
	)
}