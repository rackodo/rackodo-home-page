import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'
import Info from '../components/info'
import Works, {WorksItem} from '../components/works'
import Skills from '../components/skills'
import Footer from '../components/footer'

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeadInfo title="Bash Elliott"/>
			<HeadPanel />
			<Info id="info"/>
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
				<WorksItem
				image="/images/project-logos/card-page.png?v=2"
				title="Card Page Design"
				href="https://card-page-rackodo.vercel.app">
					<p>
						This is a small but simple design for a card page using NextJS. I also implemented a hue slider which can be used to affect the colour palette of the card dynamically.
					</p>
				</WorksItem>
				<WorksItem
				image="/images/project-logos/login-page.png"
				title="Login Page Design"
				href="https://login-page-rackodo.vercel.app">
					<p>
						This is a simple and sleek design for a login page using NextJS. Personal favourite touches are:
						<ul>
							<li>The password toggle button, which smoothly toggles the password display between being hidden and being exposed.</li>
							<li>The dynamic form colouring. Individual fields are red until filled and when both fields are filled, the &quot;login&quot; button becomes blue.</li>
						</ul>
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