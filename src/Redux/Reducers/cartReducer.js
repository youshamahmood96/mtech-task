import * as actionTypes from '../ActionTypes/cartTypes'
let initialState ={
    cart:[]
}
export const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            let found = state.cart.find(item => item.id === action.payload.id)
            if(found){
                action.payload.quantity++
                return state
            }
            else{
                action.payload.quantity = 1
                return{
                    ...state,
                    cart:[...state.cart,action.payload]
                }
            }
        case actionTypes.INCREASE_ORDER:
            state.cart.map(item => (
               item.id === action.payload.id?item.quantity++:null
            ))
            return {
                ...state,
                cart:[...state.cart]
            }
        case actionTypes.DECREASE_ORDER:
            state.cart.map(item => (
                item.quantity>0 && item.id === action.payload.id?item.quantity--:null
            ))
            state.cart.forEach(item => {
                if(item.quantity===0){
                    state.cart.splice(state.cart.indexOf(item),1)
                }
            })
             return {
                 ...state,
                 cart:[...state.cart]
             }
        case actionTypes.CHANGE_QUANTITY:
            state.cart.forEach(item => {
                if(item.id === action.payload.id){
                    item.quantity = parseInt(action.payload.value)
                }
            })
            return {
                ...state,
                cart:[...state.cart]
            }
        case actionTypes.REMOVE_ITEM:
            state.cart.forEach(item => {
                if(item.id === action.payload){
                    state.cart.splice(state.cart.indexOf(item),1)
                }
            })
            return {
                ...state,
                cart:[...state.cart]
            }
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cart:[]
            }      
        default:
            return state 
    }
}