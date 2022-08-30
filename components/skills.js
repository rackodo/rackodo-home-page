import ScrollScript from './scrollscript'

const Skills = () => {
	const [ containerRef, isVisible ] = ScrollScript({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

	return (
		<div className="skills" ref={containerRef}>
			<h1 className={isVisible ? 'skillsVisible' : 'skillsNotVisible'}>My Skills</h1>
			<SkillList title="Coding">
				<p>
					9 years of experience - Personal Projects
				</p>
				<p>
					Known Programming Languages: Python, Javascript<br />
					Known Markup and Stylesheet Languages: HTML, CSS, Next.JS
				</p>
				<table>
					<SkillPoint skill="Python" experience="Somewhat Advanced" />
					<SkillPoint skill="Javascript" experience="Somewhat Intermediate" />
					<SkillPoint skill="HTML" experience="Advanced" />
					<SkillPoint skill="CSS" experience="Advanced" />
					<SkillPoint skill="Next.JS" experience="Intermediate" />
					<SkillPoint skill="React" experience="Intermediate" />
				</table>
			</SkillList>
			<SkillList title="Video Editing">
				<p>
					3 years of experience - Personal Projects
				</p>
				<p>
					Known Video Editing Software: Adobe Premiere Pro, Adobe After Effects<br />
					Known Audio Editing Software: Audacity
				</p>
				<table>
					<SkillPoint skill="Adobe After Effects" experience="Somewhat Basic" />
					<SkillPoint skill="Adobe Premiere Pro" experience="Somewhat Advanced" />
					<SkillPoint skill="Audacity" experience="Somewhat Intermediate" />
					<SkillPoint skill="DaVinci Resolve" experience="Somewhat Intermediate" />
				</table>
			</SkillList>
			<SkillList title="Image Editing">
				<p>
					5 years of experience - Personal Projects
				</p>
				<p>
					Known Image Editing Software: Adobe Photoshop
				</p>
				<table>
					<SkillPoint skill="Adobe Photoshop" experience="Somewhat Intermediate" />
				</table>
			</SkillList>
			<SkillList title="System Administration">
				<p>
					1 year of experience - Personal Projects
				</p>
				<p>
					Known Desktop Operating Systems: Windows, Ubuntu Linux, Arch Linux<br />
					Known Server Operating Systems: Ubuntu Linux
				</p>
				<table>
					<SkillPoint skill="Windows" experience="Experienced" />
					<SkillPoint skill="Ubuntu Linux" experience="Intermediate" />
					<SkillPoint skill="Arch Linux" experience="Somewhat Basic" />
				</table>
			</SkillList>
			<SkillList title="Other">
				<table>
					<SkillPoint skill="Guitar, 4 years" experience="Somewhat Basic" />
				</table>
			</SkillList>
		</div>
	)
}

const SkillList = ({title, children}) => {
	const [ containerRef, isVisible ] = ScrollScript({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })
	return (
		<div ref={containerRef} className={`skillList ${isVisible ? 'skillListVisible' : 'skillListNotVisible'}`}>
			<h2>
				{title}
			</h2>
			{children}
		</div>
	)
}

const SkillPoint = ({skill, experience}) => {
	return (
		<tr>
			<th>{skill}</th>
			<td>{experience}</td>
		</tr>
	)
}

const SkillKnown = ({talent, skills}) => {
	return (
		<p>Known {talent}: {skills}</p> 
	)
}

export default Skills