import React from 'react'
import Helmet from 'react-helmet'

export default function SeoComponent({
    title = "🎥 🍿 CineDanton - Watch +2100 Free Public Domain Movies",
    description ="Watch A Curated list of +2100 Public Domain Movies Online",
    image = "https://cinedantan.com/logo512.png",
}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
        </Helmet>
    )
}