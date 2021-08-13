import React, { useState, useEffect } from 'react'
import Gif from '../../components/gif/index'
import './trendingGif.css'

const TrendingGif = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(
            `https://api.giphy.com/v1/gifs/trending?api_key=htHzK0393hnR4YPJStjYmSe0pmOgWsF6&limit=12&offset=5`
        )
        .then(response => response.json())
        .then(response => {
            setData(response.data)
        })
    }, [])
    
    return (
        <div className="trending-gif">
            <h1>Trending Gif</h1>
            <div className="container">
                {data?.map(gif => {
                return (
                    <Gif
                        key={gif.id}
                        title={gif.title}
                        url={gif.images.original.url}
                    />
                )
                })}
            </div>
        </div>
    )
}

export default TrendingGif
