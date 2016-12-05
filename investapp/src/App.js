import React, { Component } from 'react';
import QuestionList from './component/QuestionList';
import Result from './component/Result'
import logo from './logo.svg';
import './App.css';

import $ from 'jquery';
  
class App extends Component {
constructor(props)
{

  super(props);
    this.cname = "App";
  this.state={questions:[]};
}
    componentWillReceiveProps(nextProps)
    {
        console.log(this.cname, " componentWillReceiveProps ", nextProps, "color:blue");
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(this.cname, " shouldComponentUpdate nextProps ", nextProps, "nextState ", nextState);
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


    componentDidMount() {
        console.log(this.cname + " %c componentDidMount" );
  $.get(`http://localhost:5000/questions`, data=>{
    this.setState({questions: data.questions});
  });

  }

  render() {
      console.log(this.cname + " %c render", "color:blue" );
    return (
      <div className="App">
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                  <h1 className="display-3">AdviZer&#174;</h1>
                  <p className="lead">Your financial advisor</p>
              </div>
          </div>

        <QuestionList questions={this.state.questions}/>

        </div>
    );
  }
}

export default App;
