import Navbar from '../components/navbar'
import HeadInfo from '../components/headinfo'
import Info from '../components/info'
import Works, {WorksItem} from '../components/works'
import Skills from '../components/skills'
import Footer from '../components/footer'

export default function Other() {
	return (
		<div>
			<Navbar />
			<Info />
			<Works title="What I've done">
				<WorksItem
				image="/images/project-logos/Bashbox.png"
				title="Bashbox"
				href="https://github.com/rackodo/bashbox">
					<p>
						Bashbox is a textbox package for Python that provides a simple and easy to use system for creating simplistic and professional looking boxes to use in your Python programs.
					</p>
				</WorksItem>
				<WorksItem
				image="/images/project-logos/Bashtable.png"
				title="Bashtable"
				href="https://github.com/rackodo/bashtable">
					<p>
						Bashtable is a tables package for Python that provides a simple and easy to use system for creating simplistic and professional looking tables to use in your Python programs.
					</p>
				</WorksItem>
				<WorksItem
				image="/images/project-logos/json-gradient-maker.png"
				title="Json Gradient Maker"
				href="https://github.com/rackodo/gradient-json-minecraft">
					<p>
						Json Gradient Maker is a simple tool that allows you to create a gradient of colors in JSON format. This project is intended for use in Vanilla Minecraft as an easy way to generate JSON strings for scoreboards, team prefixes / suffixes or simple tellraw commands.
					</p>
				</WorksItem>
			</Works>
			<Works title="What I'm doing">
				<WorksItem
				title="N/A"
				href="https://github.com/rackodo">
					<p>Nothing in the works right now...</p>
				</WorksItem>
			</Works>
			<Skills />
			<Footer />
		</div>
	)
}