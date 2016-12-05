import React, { Component } from 'react';
import Question from './Question';
class QuestionList extends Component{
    constructor(props)
    {
        super(props);
        this.cname = "QuestionList";
        this.state = {
            currentquestion: 0
        };
    }
    componentWillReceiveProps(nextProps)
    {
        console.log(this.cname, " componentWillReceiveProps ", nextProps);
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(this.cname, " shouldComponentUpdate nextProps ", nextProps, "nextState ", nextState);
        if(nextState.currentquestion && nextState.currentquestion >= this.props.questions.length)
        {

            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState)
    {
        console.log(this.cname, " componentWillUpdate nextProps ", nextProps, "nextState ", nextState);
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log(this.cname, " componentDidUpdate prevProps ", prevProps, "prevState ", prevState);
    }
    componentWillUnmount()
    {
        console.log(this.cname, " componentWillUnmount" );
    }
    componentDidMount()
    {
        console.log(this.cname, " componentDidMount" );

    }

    onQuestionComplete(child)
    {
        console.log("parent ", this, "child ", child);
        this.setState({currentquestion:this.state.currentquestion + 1});

    }
    render(){
        console.log(this.cname + " %c render", "color:blue" );
        const q = this.props.questions.map((question, i)=>{

            return <Question key={i} question={question} qindex={i} show={this.state.currentquestion === i} onQuestionComplete={this.onQuestionComplete.bind(this)}/>;
        })
        return (
            <div>
                {q}
            </div>
        )
    }

    
}
export default QuestionList;