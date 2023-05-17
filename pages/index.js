import React from "react";
import { useRouter } from "next/router";
import Splash from "../components/index/splash";
import Section from "../components/section";

export default function Home() {
	const router = useRouter()

	return(
		<>
			<Splash />
			<Section
			>a</Section>
		</>
	)
}