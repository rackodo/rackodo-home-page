import Image from 'next/image'

const HeadPanel = ({title, subtitle, bg}) => {
    const styling = {
        backgroundImage: `url('${bg}')`,
    }
    return (
        <div className="headpanel-container" style={styling}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default HeadPanel