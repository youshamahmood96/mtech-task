import * as actionTypes from '../ActionTypes/modaltypes'
let initialState ={
    modalState:false,
    checkoutModalState:false
}
export const modalReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_MODAL :
            return{
                ...state,
                modalState:!state.modalState
            }
        case actionTypes.TOGGLE_CHECKOUT_MODAL:
            return{
                ...state,
                checkoutModalState:!state.checkoutModalState
            }
        default:
            return state
    }
}