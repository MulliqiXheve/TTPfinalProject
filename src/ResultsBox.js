import React from "react"

function ResultsBox(props) {
    return (
        <div>

            <h1>Hey</h1>
            <p>You have {props.score} correct answers! out of {props.total}</p>
        </div>
    )
}

export default ResultsBox;