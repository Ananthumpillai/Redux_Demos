import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import finalReducer from './reducers/reduxindex'



const root = ReactDOM.createRoot(document.getElementById('root'));



const store=createStore(finalReducer)
// const store=applyMiddleware(thunk)(createStore)(finalreducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
