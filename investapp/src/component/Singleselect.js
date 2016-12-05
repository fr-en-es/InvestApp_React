/**
 * Created by cpant1 on 12/1/16.
 */
/**import React, {Component} from "react";
import classNames from 'classnames';
class .. extends Component {


    constructor(props) {
        super(props);

    }
}
export default ..;**/

import React, {Component} from "react";
import classNames from 'classnames';
class Singleselect extends Component {

    constructor(props) {
        super(props);
        this.cname = "SingleSelect";
        console.log("Singleselect props ", props.options.values);

    }
    onClick(e)
    {

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

    render()
    {
        console.log(this.cname + " %c render", "color:blue" );

        return( <div>
            {this.props.options && this.props.options.values.map((val, i)=> {
                return <button className = "btn btn-primary btn-lg spacer" key={i} onClick={this.props.onOptionSelection.bind(this)} >{val.label}</button>;
            })}

            </div>

        );
    }
}
export default Singleselect;
