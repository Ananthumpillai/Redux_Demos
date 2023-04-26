import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Code the AppRedux componet here
export default class AppRedux extends Component{
render(){
    //onst counter = useSelector(state=>state.CounterReducer.count)
    //console.log(this.props.data);
    return(
        <div className='container'>
            <div className='row'>
                <button className='btn btn-danger' onClick={()=>this.props.decrement()}>-</button>
                {this.props.data.count}
                {/* {console.log(this.props.data.count)} */}
                <button className='btn btn-success' onClick={()=>this.props.increment()}>+</button>
            </div>
        </div>
    )
}
}