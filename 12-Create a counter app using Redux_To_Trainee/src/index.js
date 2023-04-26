import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux';

import AppRedux from './AppContainer';


ReactDOM.render(
<Provider store={store}>
    
        <AppRedux/>
    

</Provider>,document.getElementById("root"))
// Render AppRedux component with Store


