import React from 'react'

export const GifGridItem = (props) => {
    const {id, title, url} = props
    return (
        <div className="GifGridItem animate__animated animate__fadeIn animate__delay-1s">
            <img id={id} src={url} alt={title}/>
            <p>{title}</p> 
        </div>
    )
}
