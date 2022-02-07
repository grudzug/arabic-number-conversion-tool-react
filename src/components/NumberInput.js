import { useContext, useState } from 'react'
import { ResultContext } from '../contexts/ResultContext'
import { AnimateContext } from '../contexts/AnimateContext'
const convert = require('../../src/utils/convert')

export default function NumberInput() {

    const [num, setNum] = useState("")                  //input field value {string} and setter
    const { setResult } = useContext(ResultContext)     //set state for result {object} of conversion
    const { setAnimate } = useContext(AnimateContext)   //set state for animate {boolean}

    function handleSubmit(e) {       //function for handling form submit
        e.preventDefault()          //prevent default behavior of form
        try {                      //try-catch block for conversion
          setResult(
              {
                phrase:`${num} = ${convert(parseFloat(num))}`,
                error: ""
              })
        }
        catch (err) {
            setResult(
                {
                  phrase:"",
                  error: err.message
                })
        }

        setAnimate(true)        //if true, adding animation class in <Result/> based on {result}
        setTimeout(() => {
            setAnimate(false)
        }, 200)

        setNum("")             //emptying input field
    }

    return (
        <form onSubmit={handleSubmit}>
                <label htmlFor="number-input">Your number to convert:</label>
                <input
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    type="number"
                    id="number-input"
                    name="number-input"
                    placeholder="Add a number"
                />
                <button type="submit">Convert</button>
        </form>
    )
}