import Image from 'next/image'
import Link from 'next/link'

const Works = ({title, children}) => {
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
                        src={image ? image : 'https://via.placeholder.com/150x150'}
                        alt={title}
                        width={150}
                        height={150}
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