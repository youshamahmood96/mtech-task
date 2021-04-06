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