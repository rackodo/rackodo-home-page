import Image from 'next/image'
import Link from 'next/link'
import ScrollScript from './scrollscript'

const Works = ({title, children}) => {
    const [ containerRef, isVisible ] = ScrollScript({
        root: null,
        rootMargin: "0px",
        threshold: 0
    })

    return (
        <div>
            <div className="worksHeader">
                <h1>{title}</h1>
            </div>
            <div className="works">
                {children}
            </div>
        </div>
    )
}

export const WorksItem = ({title, href, image, children}) => {
    return (
        <div className="worksItem">
            <div className="worksTop">
                <Link href={href}><a href={href}>
                    <div className="worksImageWrapper">
                        <Image
                        src={image ? image : "/images/project-logos/unknown.png"}
                        alt={title}
                        width={250}
                        height={250}
                        layout="raw" />
                    </div>
                    <h1>{title}</h1>
                </a></Link>
            </div>
            <div className="worksBottom">
                {children}
            </div>
        </div>
    )
}

export default Works