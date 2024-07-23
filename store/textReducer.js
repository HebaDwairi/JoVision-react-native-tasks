const initialState = {
    text:'',
}
export const change = (text) => ({
    type: 'CHANGE',
    payload: text,
});
const CHANGE = 'CHANGE';
const textReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE:
            return{
                ...state,
                text: action.payload,
            };
        default:
            return{
                state,
            };
    }
}
export default textReducer;

