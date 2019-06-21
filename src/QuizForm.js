import React from "react"

function Quizform(props) {
    return (
        <div>
          <form >
          <label>Quiz Form</label>
            <inpu
                onClick={props.handleChange}
                  />
                   <inpu
                onClick={props.handleChange}
                  />
          </form>
        </div>
    )
}

export default Quizform