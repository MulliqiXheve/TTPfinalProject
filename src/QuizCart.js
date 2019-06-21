import React from "react"

class QuizCart extends React.Component {
    constructor(props) {
        super(props);
    }

    choiceMade = (event) => {
        event.preventDefault();
        console.log(event.target);
        let choiceNum;
        for(let i=0; i<4; ++i) {
            if(event.target[i].checked) {
                choiceNum = i;
                break;
            }
        }

        // if no choice was made, dont go to next card
        if(choiceNum === undefined)
            return;

        if(event.target[choiceNum].value === 'correct') {
            // incrment correct count
            this.props.correct();
        }
        
        // go to next card
        this.props.nextQuestion();
    }


    render() {

        return (
            <div>
                <form onSubmit={this.choiceMade}>
                    <p>{this.props.question}</p>
                    <input id="choice1" type="radio" name="gender" value="correct"/>  {this.props.correct_answer} <br />
                    <input id="choice2" type="radio" name="gender" value="wrong" />  {this.props["incorrect_answers"][0]} <br /> 
                    <input id="choice3" type="radio" name="gender" value="wrong" /> {this.props.incorrect_answers[1]}  <br />
                    <input id="choice4" type="radio" name="gender" value="wrong" />  {this.props.incorrect_answers[2]}  <br />  
                    <button className="btn btn-outline-info" > Next Question</button>
                </form>
            </div>
        )
    }
}

export default QuizCart;