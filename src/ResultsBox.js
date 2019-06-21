import React from "react"
import Footer from "./Footer"

function ResultsBox(props) {
    return (
        <div class="alert alert-primary">

           
            <p>You have {props.score} correct answers out of {props.total}!</p>
            <button class="btn btn-outline-success" onClick={props.startOver}>Start Over</button>
           
        </div>
    )
}

export default ResultsBox;