import React,{Component} from 'react';
let quizData= require('../common/quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state
            {quiz_position: 1};
    }
    render(){
        return(
            <div className="QuizQuestion">
                {quizData.quiz_questions[1].instruction_text}
            </div>
        );
    }
}

export default Quiz;
