import React, { Component } from 'react';
import Singleselect from './Singleselect'
import './question.css'
import classNames from 'classnames';

const defaultProps ={
    a:'f',
    question:{text:'question text'}
};
class Question extends Component{


constructor(props)
{
    super(props);
   // console.log("constructor ", this.props.question);
    this.cname = "Question";
    this.state = {
        visibility: false,
        status:"unattempted"
    };
}
componentWillReceiveProps(nextProps)
{
    console.log(this.cname, " componentWillReceiveProps ", nextProps);
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
componentDidMount()
{
    console.log(this.cname, " componentDidMount" );

}

onOptionSelection()
{
    console.log ("slected value ", this);
    //this.state.status = "complete";
    this.props.onQuestionComplete(this);

}
render(){
    console.log(this.cname + " %c render", "color:blue" );
    let className = {question:true,
                        show: this.props.show

                };
    var qid = this.props.question.key;

    return <div className={classNames(className, qid, "row" )}>
            <div className="col-sm-12">
                <div className="card card-block">
                    <h3 className="card-title">{this.props.question.text}</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Singleselect options={this.props.question.options} onOptionSelection={this.onOptionSelection.bind(this)}/>
                </div>
            </div>

        </div>;
    }
}
Question.propTypes  ={
    question: React.PropTypes.object.isRequired

}
Question.defaultProps = defaultProps;
export default Question;