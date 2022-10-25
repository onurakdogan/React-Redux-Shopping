import axios from 'axios';
import { BASE_URL } from '../../../Api';

import {GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR,ADD_PRODUCT_BASKET,
      UPDATE_PRODUCT_BASKET,REMOVE_PRODUCT_BASKET,DECREMENT_PRODUCT_BASKET} from '../Types';

export const getProducts = () => async dispatch => {
      await axios.get(BASE_URL+"/items")
      .then(dispatch({type:GET_PRODUCTS_LOADING}))
      .then( response => dispatch({type:GET_PRODUCTS_SUCCESS, payload:response.data}))
      .catch(error => dispatch({type:GET_PRODUCTS_ERROR, payload:error}) );
}

export const addProduct = (item) => {
      return {
      type: ADD_PRODUCT_BASKET,
      payload:item
      }
}

export const updateProduct = (item) => {
      return {
      type: UPDATE_PRODUCT_BASKET,
      payload:item
      }
}

export const decrementProduct = (item) => {
      return {
      type: DECREMENT_PRODUCT_BASKET,
      payload:item
      }
}

export const removeProduct = (item) => {
      return {
      type: REMOVE_PRODUCT_BASKET,
      payload:item
      }
}

 