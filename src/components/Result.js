import { useContext } from 'react'
import { ResultContext } from '../contexts/ResultContext'
import { AnimateContext } from '../contexts/AnimateContext'

export default function Result() {

    const { result } = useContext(ResultContext)
    const { animate } = useContext(AnimateContext)

    //if it is a phrase, shows it with a bouncing effect
    //if it is an error message, shows it with a shaking effect

    return (
        <>
            {result.phrase? 
            <p className={animate? "bounce-effect" : ""}>
                {result.phrase}
            </p>
            :   
            <p className={animate? "shake-effect" : ""}>
                {result.error}
            </p>}
        </>
    )
}