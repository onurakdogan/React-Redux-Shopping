import {GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR,
  ADD_PRODUCT_BASKET,UPDATE_PRODUCT_BASKET,REMOVE_PRODUCT_BASKET,DECREMENT_PRODUCT_BASKET} from '../../actions/Types';

const INITIAL_STATE = {
  products: [],
  message:"",
  isLoading:false,
  cart: []
};
 

export default function ProductsReducer(state = INITIAL_STATE,action)  {
    const {type} = action;
    const {cart} = state ;

    switch(type){
        case GET_PRODUCTS_LOADING :
        return {
          ...state,
          isLoading:true,
          message:""
        }
        case GET_PRODUCTS_SUCCESS: 
        return {
          ...state,
          products:action.payload,
          isLoading:false
        }
        case GET_PRODUCTS_ERROR:
        return {
          ...state,
          message:action.payload,
          isLoading:false
        }
        case ADD_PRODUCT_BASKET:

               const existingItem = cart.find(item => item.added === action.payload.added);
               existingItem ? action.payload.qty += 1 : action.payload.qty = 1
           
               return {
                ...state,
                cart: existingItem ? cart : [...cart,action.payload]
              } 

        case UPDATE_PRODUCT_BASKET:
              action.payload.qty += 1
              return {
                ...state,
                cart:[...cart]
              } 

        case DECREMENT_PRODUCT_BASKET:
              action.payload.qty -=1;
              const removeitem = cart.filter(item => item.added !== action.payload.added);

              return {
                ...state,
                cart:action.payload.qty == 0 ? removeitem : cart
              }      

         case REMOVE_PRODUCT_BASKET:
           
              const items = cart.filter(item => item.added !== action.payload.added);
            
              return {
                ...state,
                cart:[...items]
              }       
 
  
        default: return state ; 
    }
        
} 