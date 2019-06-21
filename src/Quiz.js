import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import QuizCart from './QuizCart';
import ResultBox from './ResultsBox';
import axios from 'axios';
import Footer from "./Footer"


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

    startOver = () => {
        
        this.setState({
            index: 0,
            numCorrect: 0
        });
    }
    render() {
        let element;
        if(this.state.quizzes.length === 0) {
            element = <h1>The score</h1>
        } else if (this.state.index >= this.state.quizzes.length) {
            element = <ResultBox startOver={this.startOver} score={this.state.numCorrect} total={this.state.quizzes.length}/>
        } else {
            element = <QuizCart nextQuestion={this.nextQuestion} correct={this.incrementCorrect} {...this.state.quizzes[this.state.index]}  />
        }
        return(
        <div class="alert alert-primary">
           
            <h3>{element}</h3>
            <div>
            
            </div>
        </div>
        )
    }
}

      


  export default Quiz