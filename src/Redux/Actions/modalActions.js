import * as actionTypes from '../ActionTypes/modaltypes'
export const toggleModal = () =>{
    return{
        type: actionTypes.TOGGLE_MODAL
    }
}
export const toggleCheckoutModal = () =>{
    return{
        type: actionTypes.TOGGLE_CHECKOUT_MODAL
    }
}
export const closeCheckoutModal = () =>{
    return{
        type: actionTypes.CLOSE_CHECKOUT_MODAL
    }
}