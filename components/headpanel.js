import ScrollScript from './scrollscript'

const HeadPanel = () => {

    const [ containerRef, isVisible ] = ScrollScript({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

    return (
        <div className="headpanel">
            <div className={`headpanel-container ${isVisible ? "panelVisible" : "panelNotVisible"}`} ref={containerRef}>
                <div className="text">
                    <h1>Bash Elliott</h1>
                    <h3>Hobbyist Frontend and Python Developer based in Sydney, Australia</h3>
                    {/* <p>Bash is a soon-to-be highschool graduate with a passion for computing, robotics, software development and website design. They began their coding journey in early 2012 when they learned the basics of HTML from a book borrowed from their local library, and began teaching themselves how to design basic websites with the use of CSS. Since then, Bash has tried their hand at a variety of challenges in the programming field, including game development and app development, and even practices some sys-admin knowledge with their two servers at home.</p> */}
                </div>
            </div>
        </div>
    )
}

export default HeadPanel