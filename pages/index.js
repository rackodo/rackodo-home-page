import React from "react";
import { useRouter } from "next/router";
import Splash from "../components/index/splash";

export default function Home() {
	const router = useRouter()

	return(
		<>
			<Splash />
		</>
	)
}