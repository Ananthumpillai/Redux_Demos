import { createStore, combineReducers } from 'redux';


//Define intitial state
const initialCounterState = { count: 0 };

//Define Actions incrementAction and decrementAction
export const incrementAction = (decrementAction) => {
   return {
      type: 'increase',
      count: 1
   }


}
export const decrementAction = () => {
   return {
      type: 'decrease',
      count: 1
   }

}

//Define Reducers
export const countReducer = (state = initialCounterState, action) => {
   // console.log(action);
   switch (action.type) {
      case 'increase':
        
         let newIncCount = {...state,count:state.count+1}
         return newIncCount;

      case 'decrease':
      return {...state,count:state.count-1}
      default:
         return initialCounterState

   }
}

//Combine Reducers

export const counterReducers = combineReducers({count:countReducer});

// Configure the store
function Configure() {
   const store = createStore(counterReducers)
   // console.log(store);
   return store
   // code
}

// Create the store
export const store = Configure();