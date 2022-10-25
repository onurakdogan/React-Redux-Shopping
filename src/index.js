import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Products from './components/Products/Products';
import Page404 from './PageNotFound/Page404';
import Login from './components/Login/Login';
import Basket from './components/Basket/Basket';

import {HashRouter,Routes,Route,Link} from "react-router-dom";

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

const store = createStore(reducers,applyMiddleware(thunk)); 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
 
 
root.render(
 <React.StrictMode>
   
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </Provider>
     
 </React.StrictMode>
);
 