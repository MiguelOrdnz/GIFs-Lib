import { useEffect, useState } from "react";

export const useGet = (url) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setState({
                loading:false,
                error: null,
                data
            }))
            .catch(e => console.log(e));

        return () => {
            setState({
                loading: true,
                error: null,
                data: null
            })
        }
    }, [url])

    if (!url) {
        return 'Error: parameter url missing from useGet hook.';
    }
    
    return state; 
}
