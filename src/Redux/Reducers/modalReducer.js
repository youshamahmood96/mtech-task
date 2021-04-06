import * as actionTypes from '../ActionTypes/modaltypes'
let initialState ={
    modalState:false
}
export const modalReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_MODAL :
            return{
                ...state,
                modalState:!state.modalState
            }
        default:
            return state
    }
}