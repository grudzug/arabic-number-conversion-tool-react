import { createContext, useState } from "react";

export const AnimateContext = createContext()

export default function AnimateContextProvider(props) {
    const [animate, setAnimate] = useState(false)

    return (
        <AnimateContext.Provider value={{ animate, setAnimate }}>
            { props.children }
        </AnimateContext.Provider>
    )
}