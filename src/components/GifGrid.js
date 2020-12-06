import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {    

    const [gifs, setGifs] = useState([])
    useEffect(() => {
        getGifs(category)
            .then(setGifs);
    }, [category])
    
    return (
        <>
            <h3>{ category }</h3>
            <hr/>
            <div className='GifGrid'>
                {
                    gifs.map( gif => <GifGridItem key={gif.id} {...gif}/> )
                }
            </div>
        </>
    )
}
