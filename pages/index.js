import { Box, Container } from "@chakra-ui/react";
import Callout from "../components/callout";
import ProfileCard from "../components/profilecard";

export default function Home() {
	return(
		<>
			<Callout>Hi, I&apos;m a frontend web developer based in Australia!</Callout>
			<ProfileCard />
		</>
	)
}