import { useContext } from 'react'
import { ResultContext } from '../contexts/ResultContext'

export default function Result() {

    const { result } = useContext(ResultContext)

//show the phrase or the error message

    return (
        <>
            {result.phrase? 
            <p>
                {result.phrase}
            </p>
            :   
            <p>
                {result.error}
            </p>}
        </>
    )
}