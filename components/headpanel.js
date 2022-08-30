import ScrollScript from './scrollscript'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

const scrollToInfo = () => {
    scroll.scrollTo(window.innerHeight, {
        duration: 500,
        delay: 100,
        smooth: true,
        containerId: "info",
    })
}

const HeadPanel = () => {
    const [ containerRef, isVisible ] = ScrollScript({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

    return (
        <div className="headpanel" >
            <div className="video-container">
                <video autoPlay muted loop>
                    <source src="/headpanel.mp4" type="video/mp4"/>
                </video>
            </div>
            <div ref={containerRef} className={`headpanel-container ${isVisible ? "panelVisible" : "panelNotVisible"}`}>
                <div className="headpanel-text">
                    <h1 >Bash Elliott</h1>
                    <h3>Hobbyist Frontend and Python Developer based in Sydney, Australia</h3>
                    {/* <p>Bash is a soon-to-be highschool graduate with a passion for computing, robotics, software development and website design. They began their coding journey in early 2012 when they learned the basics of HTML from a book borrowed from their local library, and began teaching themselves how to design basic websites with the use of CSS. Since then, Bash has tried their hand at a variety of challenges in the programming field, including game development and app development, and even practices some sys-admin knowledge with their two servers at home.</p> */}
                </div>
                <div className='headpanel-buttons' >
                    <HeadPanelButton label="Contact" href="mailto:bashelliott@gmail.com" />
                    <HeadPanelButton label="Learn More" href="#info" onClick={scrollToInfo} />
                </div>
            </div>
        </div>
    )
}

const HeadPanelButton = ({label, href, onClick}) => {
    return (
        <div className='headpanel-button-container'>
            <Link href={href}>
                <a href={href} onClick={onClick}>{label}</a>
            </Link>
        </div>
    )
}

export default HeadPanel