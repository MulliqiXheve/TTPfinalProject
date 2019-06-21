import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import QuizCart from './QuizCart';
import ResultBox from './ResultsBox';
import axios from 'axios';


class Quiz extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        quizzes:[],
        loading:true,
        index:0,
        numCorrect: 0
      }
      
    }

    getQuestions = () => {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        .then( (resolve) => {   
            this.setState( {quizzes: resolve.data.results} );
            console.log(resolve.data.results);
        })
        .catch( (err)=> console.log(err));
    }

    componentDidMount() {
        this.getQuestions();
    }

    nextQuestion = () => {
        this.setState({ index: this.state.index + 1});
    }

    incrementCorrect = () => {
        console.log("CORRECT")
        this.setState({ numCorrect: this.state.numCorrect + 1});
    }

    render() {
        let element;
        if(this.state.quizzes.length === 0) {
            element = <h1>The score</h1>
        } else if (this.state.index >= this.state.quizzes.length) {
            element = <ResultBox score={this.state.numCorrect} total={this.state.quizzes.length}/>
        } else {
            element = <QuizCart nextQuestion={this.nextQuestion} correct={this.incrementCorrect} {...this.state.quizzes[this.state.index]}  />
        }
        return(
        <div>
            
            {/* <QuizCart someProp='questions'/>
            <QuizCart someProp='answer'/> */}
            {element}
            
            {/* <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
            <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} /> */}
        </div>
        )
    }
}

      
//       var dataSet = [
//         {
//           question: "Everything in React is a _____________?",
//           answers: [
//             "Module",
//             "Component",
//             "Package",
//             "Class"
//           ],
//           correct: 2
//         },
//         {
//           question: "In which directory React Components are saved?",
//               answers: [
//                 "Inside js/components/",
//                 "Inside vendor/components/",
//                 "Inside external/components/",
//                 "Inside vendor/"
//               ],
//               correct: 1
//         },
//          {
//               question: "How many elements does a react component return",
//               answers: [
//                 "2 Elements",
//                 "1 Element",
//                 "Multiple Elements",
//                 "non"
//               ],
//               correct: 3
//             },
//             {
//               question: "What is state in Reac",
//               answers: [
//                 "A persistant storage",
//                 "An internal data store (object) of a component",
                
//               ],
//               correct: 2
//             },
//             {
//               question: "What is Babel",
//               answers: [ 
//                 "A transpiler",
//                 "An interpreter",
//                 "A Compiler",
//                 "Both Compiler and Transpilar"
//               ],
//               correct: 4
//             },
//             {
//               question: "What does the webpack command do",
//               answers: [
                  
//                 "Transpiles all the Javascript down into one file",
//                 " Runs react local development server.",
//                 "A module bundler"
                
//               ],
//               correct: 3
//             },
//             {
//               question: "What port is the default where the webpack-dev-server will run?",
//               answers: [
//                 "3000",
//                 "8080",
//                 "3306"
    
//               ],
//               correct: 2
//             },
//             {
//               question: "What is ReactJS?",
//               answers: [
//                 "Server side Framework",
//                 "User-interface framework",
//                 "A Library for building interaction interfaces"
//               ],
//               correct: 0
//             },
//             {
//               question: "What are the two ways that data gets handled in React",
//               answers: [
//                 "state & props",
//                 "services & components"
                
//               ],
//               correct: 1
//             },
//             {
//               question: "In React what is used to pass data to a component from outside?",
//               answers: [
//                 "setState",
//                 "render with arguments",
//                 "props",
//                 "PropTypes"
//               ],
//               correct: 1
//             },
//       ];
      
//       this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
//       this.handleClick = this.handleClick.bind(this)
      
//     } // end constructor
    
//     handleClick(choice) {
//       if (choice === this.state.dataSet[this.state.current].correct) {
//         this.setState({correct: this.state.correct + 1})
//       } else {
//         this.setState({incorrect: this.state.incorrect + 1})
//       }
      
//       if (this.state.current === 9) {
//         this.setState({current: 0})
//         this.setState({incorrect: 0})
//         this.setState({correct: 0})
//       } else {
//            this.setState({current: this.state.current + 1}) 
//       }
//     }
    

  
//   function Question(props) {
    
//     return (
//       <h1 id="questiontext">{props.dataSet.question}</h1>
//     )
//   }
  
//   function Answer(props) {
//     return(
//       <div>
//         <button id="answertext" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//       </div>
//     )
//   }
  
//   function AnswerList(props) {
//     var answers = []
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//       answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     return(
//       <div>
//         {answers}
//       </div>
//     )
//   }
  
//   function QuizArea(props) {
//     return(
//       <div id="quizArea">
//         <Question dataSet={props.dataSet} />
//         <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//       </div>
//     )
//   }
  
//   function TotalCorrect(props) {
     
//     return(
//       <h2 class="total">Correct: {props.correct}</h2>
//     )
//   }
  
//   function TotalIncorrect(props) {
    
//     return(
//       <h2 id="total">Incorrect: {props.incorrect}</h2>
//     )
//     }
//   function ScoreArea(props) {
//     return(
//       <div id="scoreArea" >
//         <TotalCorrect correct={props.correct} />
//         <TotalIncorrect incorrect={props.incorrect} />
//       </div>
//     )
//   }

// //   ReactDOM.render(
// //     <Quiz />,
// //     document.getElementById("root")
// //   )

  export default Quiz