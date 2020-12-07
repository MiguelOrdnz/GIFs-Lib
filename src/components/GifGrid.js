import React from 'react'
import { useFetchGiphy } from '../hooks/useFetchGiphy'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {    

    const {imgs, loading} = useFetchGiphy(category)

    return (
        <>
            <h3>{ category }</h3>
            <hr/>
            { loading && 'loading..'}

            <div className='GifGrid'>
                {
                    imgs.map( gif => <GifGridItem key={gif.id} {...gif}/> )
                }
            </div>
        </>
    )
}
