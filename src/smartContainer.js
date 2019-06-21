import React, {Component} from "react"
import QuizForm from './QuizForm.js'
import QuizCard from './QuizCard.js'
import Footer from "./Footer.js";

class Results extends Component{
  state = {
    quizzes:[],
    loading:true
  }
  
}

searchZip = ( event ) => {
  event.preventDefault();
  let userInput = event.target[0].value;
  console.log(userInput);

  axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
  .then( (resolve) => {   
    this.setState( {quizzes: resolve.data} );
    console.log(resolve.data);
  })
  .catch( (err)=> console.log(err));
}

render() {
  let elems = [];     // container
  let index = 0;
  for(let zip of this.state.quizzes) {
    elems.push(<ResultsBox key={index++} {...zip}/>);
  }
  
  return (
    <div> 
      <form onSubmit={this.searchZip}>  
        <h1>Home</h1>
        <input type="text" />
      </form>

      {elems}
    
    </div>
  );
}
  
  export default Results;