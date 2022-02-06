import { createContext, useState } from "react"

export const ResultContext = createContext()

export default function ResultContextProvider(props) {
    const [result, setResult] = useState(
        {
            error: "",
            phrase: "This tool converts numeric input into the English phrase of that number."
        }
    )

    return (
        <ResultContext.Provider value={{ result, setResult }}>
            { props.children }
        </ResultContext.Provider>
    )
}