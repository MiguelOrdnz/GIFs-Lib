import React from 'react'

export const GifGridItem = (props) => {
    const {id, title, url} = props
    return (
        <div className="GifGridItem">
            <img id={id} src={url} alt={title}/>
            <p>{title}</p> 
        </div>
    )
}
