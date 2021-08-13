import React, { useState } from 'react'
import Gif from '../../components/gif/index'
import SearchForm from '../../components/searchForm'
import './searchGif.css'

const SearchGif = () => {
    const [searchInput, setSearchInput] = useState("")
    const [data, setData] = useState([])

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearchResult = (event) => {
        event.preventDefault()
        fetch(
            `${process.env.REACT_APP_GIPHY_ENDPOINT}/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchInput}&limit=12`
        )
        .then(response => response.json())
        .then(response => {
            setData(response.data)
        })
    }
    
    return (
        <div className="search-gif">
            <h1>Discover your favorite Gif</h1>
            <SearchForm 
                query={searchInput}
                handleChange={handleSearchInput}
                handleSubmit={handleSearchResult}
            />
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

export default SearchGif
