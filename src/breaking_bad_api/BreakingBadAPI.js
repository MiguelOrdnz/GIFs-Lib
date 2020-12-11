import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useGet } from '../hooks/useGet'

export const BreakingBadAPI = () => {
    const {counter, increase, decrease} = useCounter(1, 999, 1)
    const {loading, data} = useGet(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {quote, author} = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes!</h1>
            <hr />
            {
                loading ?
                (
                    <div className="alert alert-info text-center">Loading..</div>
                )
                : 
                (
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">{quote}</p>
                        <footer className="blockquote-footer mt-2">
                            {author}
                        </footer>
                    </blockquote>   
                )
            }

            <button className="btn btn-primary mt-2" onClick={increase}>
                Next
            </button>
            <br/>
            <button className="btn btn-primary mt-2" onClick={decrease}>
                Previous
            </button>

        </div>
    )
}
