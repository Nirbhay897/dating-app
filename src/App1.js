import React from "react"
import Heading from "./heading1"
import List from './list'
import Calc, {mult, divi, sub} from "./components/calculator"



function App1() {

    const name = "Nirbhay"
    return <div>
        <Heading />
        <List />
        <ul>
            <li>{mult(1,2)}</li>
            <li>{divi(1,2)}</li>
            <li>{sub(1,2)}</li>
            <li>{Calc(1,2)}</li>
        </ul>
        <p>Created by {name} </p>
    </div>
}

export default App1;
