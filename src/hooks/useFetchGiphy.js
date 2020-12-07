import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGiphy = (category) => {

    const [data, setData] = useState({
        imgs: [],
        loading: true
    })

    useEffect(() => {
            getGifs(category)
                .then((imgs) => {
                    setData( {
                        imgs: imgs,
                        loading: false
                    })
                })
    }, [category])
    
    return data
}
