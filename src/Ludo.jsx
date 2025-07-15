import { useState } from "react"

export default function LudoBoard() {
    const [move, setMove] = useState({red: 0, yellow: 0, blue: 0, green: 0});

    let updateRed = () => {
        setMove({...move, red: move.red += 1})
    }

    let updateYellow = () => {
        setMove({...move, yellow: move.yellow += 1})
    }

    let updateBlue = () => {
        setMove({...move, blue: move.blue += 1})
    }

    let updateGreen = () => {
        setMove({...move, green: move.green += 1})
    }

    return (
        <div>
            <h2>Game Begins</h2>
            <div className="board">
                <p>Red moves = {move.red} </p>
                <button style={{backgroundColor:"red", color:"black"}} onClick={updateRed}>+1</button>
                <p>Yellow moves = {move.yellow} </p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                <p>Blue moves = {move.blue} </p>
                <button style={{backgroundColor:"blue", color:"black"}} onClick={updateBlue}>+1</button>
                <p>Green moves = {move.green} </p>
                <button style={{backgroundColor:"green", color:"black"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}