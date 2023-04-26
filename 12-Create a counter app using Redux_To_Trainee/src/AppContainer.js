// //can be present in AppContainer.js file
import { incrementAction , decrementAction } from './redux';

import AppRedux  from './AppRedux';
import { connect } from 'react-redux';


// //Map the State to Props
// //console.log("aaa");
const mapStatetoProps=state=>({
    
    data:state.count
})
const mapDispatchToProps = function(dispatch){
  return {
    increment:(data)=>{
     dispatch(incrementAction(data))
     },
   
   decrement:(data)=>{
    dispatch(decrementAction(data))
    }
  }
  }
  
    
export default  connect(mapStatetoProps,mapDispatchToProps)(AppRedux);
// //Use connect to connect to component 
//Export this connected conponent