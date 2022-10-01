import React from "react";
import Callout from "../components/callout";
import ProfileCard from "../components/profilecard";
import Section from "../components/section";
import { Button, Container, Link, useColorMode } from "@chakra-ui/react";
import { H1 } from "../components/headings";
import { ParaSection } from "../components/section";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()

	return(
		<>
			<Callout>Hi, I&apos;m a frontend web developer based in Australia!</Callout>
			<ProfileCard />
			<Section>
				<H1>Work</H1>
				<ParaSection>
					Bash is a soon-to-be high school graduate with a passion for computing, robotics, software development and website design. They&apos;ve tried their hand at a variety of challenges in the programming field, including game development and app development, and even practices some sys-admin knowledge with their two servers at home. When not online, they enjoy watching films and exploring their neighbourhood.
				</ParaSection>
				<ParaSection>
					Bash also practices creative writing in their spare time and occasionally makes videos for their YouTube channel <Link href="https://www.youtube.com/channel/UChiRebGN9a1oSoG_QZj6LjQ" isExternal>Rackodo</Link>. They also enjoy playing guitar recreationally.
				</ParaSection>
				<Container p={0} textAlign="center">
					<Button
					bg={colorMode === 'light' ? 'dark.400' : 'light.400'}
					rightIcon={<ChevronRightIcon/>}
					onClick={() => router.push('/portfolio')} >
						My portfolio
					</Button>
				</Container>
			</Section>
		</>
	)
}