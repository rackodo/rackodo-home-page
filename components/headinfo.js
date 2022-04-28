import Head from 'next/head'

const HeadInfo = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Primary Meta Tags */}
            <meta name="title" content="Bash Elliott" />
            <meta name="description" content="The Homepage of Bash Elliott - Hobbyist Frontend and Python Developer based in Sydney, Australia (They/Them)" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://raccter.github.io/" />
            <meta property="og:title" content="Bash Elliott" />
            <meta property="og:description" content="The Homepage of Bash Elliott - Hobbyist Frontend and Python Developer based in Sydney, Australia (They/Them)" />
            <meta property="og:image" content="https://raw.githubusercontent.com/raccter/raccter.github.io/dev/public/images/station.JPG" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://raccter.github.io/" />
            <meta property="twitter:title" content="Bash Elliott" />
            <meta property="twitter:description" content="The Homepage of Bash Elliott - Hobbyist Frontend and Python Developer based in Sydney, Australia (They/Them)" />
            <meta property="twitter:image" content="https://raw.githubusercontent.com/raccter/raccter.github.io/dev/public/images/station.JPG" />
        </Head>
    )
}

export default HeadInfo