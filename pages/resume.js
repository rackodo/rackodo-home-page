import React from "react";
import Section, { ParaSection } from "../components/section";
import { H1, H2, H3 } from "../components/headings";
import { Text } from "@chakra-ui/react";

export default function Resume() {
	return(
		<Section>
			<H1>Resume</H1>
			<H2>Skills</H2>
			<H3>Coding</H3>
			<Text textAlign="justify">
				9 years of experience - Personal Projects<br/>
				Known Programming Languages: Python, Javascript<br/>
				Known Markup and Stylesheet Languages: HTML, CSS, Next.JS
			</Text>
			<Text textAlign="justify">
				<b>Python</b> Somewhat Advanced<br/>
				<b>Javascript</b> Somewhat Intermediate<br/>
				<b>HTML</b> Advanced<br/>
				<b>CSS</b> Advanced<br/>
				<b>Next.JS</b> Intermediate<br/>
				<b>React</b> Intermediate
			</Text>

			<H3>Video Editing</H3>
			<Text textAlign="justify">
				3 years of experience - Personal Projects<br/>
				Known Video Editing Software: Adobe Premiere Pro, Adobe After Effects<br/>
				Known Audio Editing Software: Audacity
			</Text>
			<Text textAlign="justify">	
				<b>Adobe After Effects</b> Somewhat Basic<br/>
				<b>Adobe Premiere Pro</b> Somewhat Advanced<br/>
				<b>Audacity</b> Somewhat Intermediate<br/>
				<b>DaVinci Resolve</b> Somewhat Intermediate
			</Text>

			<H3>Image Editing</H3>
			<Text textAlign="justify">
				5 years of experience - Personal Projects<br/>
				Known Image Editing Software: Adobe Photoshop
			</Text>
			<Text textAlign="justify">
				<b>Adobe Photoshop</b> Somewhat Intermediate
			</Text>

			<H3>System Administration</H3>
			<Text textAlign="justify">
				1 year of experience - Personal Projects<br/>
				Known Desktop Operating Systems: Windows, Ubuntu Linux, Arch Linux<br/>
				Known Server Operating Systems: Ubuntu Linux
			</Text>
			<Text textAlign="justify">
				<b>Windows</b> Experienced<br/>
				<b>macOS</b> Somewhat Experienced<br/>
				<b>Ubuntu Linux</b> Intermediate<br/>
				<b>Arch Linux</b> Somewhat Basic
			</Text>
		</Section>
	)
}