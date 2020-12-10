import React, { useState } from 'react'
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GiphyPg = () => {
    const [categories, setCategories] = useState([])

    return (
        <div>
            <h1>Giphy Playground</h1>
            <AddCategory setCategories = { setCategories }/>
            <div>
            {
                categories.map(( category ) => (
                    <GifGrid 
                    key={ category }
                    category={ category }/>
                )
                )
            }
            </div>
        </div>
    )
}
