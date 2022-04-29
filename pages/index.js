import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'
import Info from '../components/info'
import Works, {WorksItem} from '../components/works'
import Footer from '../components/footer'

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeadInfo title="Bash Elliott"/>
			<HeadPanel />
			<Info />
			<Works title="What I've done">
				<WorksItem
				title="Bashbox"
				href="https://github.com/raccter/bashbox">
					<p>
						Bashbox is a textbox package for Python that provides a simple and easy to use system for creating simplistic and professional looking boxes to use in your Python programs.
					</p>
				</WorksItem>
				<WorksItem
				title="Bashtable"
				href="https://github.com/raccter/bashtable">
					<p>
						Bashtable is a tables package for Python that provides a simple and easy to use system for creating simplistic and professional looking tables to use in your Python programs.
					</p>
				</WorksItem>
				<WorksItem
				title="Json Gradient Maker"
				href="https://github.com/raccter/gradient-json-minecraft">
					<p>
						Json Gradient Maker is a simple tool that allows you to create a gradient of colors in JSON format. This project is intended for use in Vanilla Minecraft as an easy way to generate JSON strings for scoreboards, team prefixes / suffixes or simple tellraw commands.
					</p>
				</WorksItem>
			</Works>
			<Footer />
		</div>
	)
}