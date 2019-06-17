import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createLogger} from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import App from './Containers/App';
import { Change_Id_Of_Robot, Get_Player2_Details, Get_Player1_Details } from './Redux_JS_Files/reducers';

const rootReducer = combineReducers({ Change_Id_Of_Robot, Get_Player2_Details, Get_Player1_Details });

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <div style={{height:'100%',width:'100%'}}>
                        <App />
                    </div>
                </Provider>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
