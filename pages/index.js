import React from "react";
import { useRouter } from "next/router";
import Splash from "../components/splash";

export default function Home() {
	const router = useRouter()

	return(
		<>
			<Splash />
		</>
	)
}