
export const  Sample = (aaa)=> (dispatch)=> {
    dispatch({
        type: 'ADD',
        payload : aaa
    });
};
 
export const  rev = (bb)=> (dispatch)=> {
    dispatch({
        type: 'SUB',
        payload : bb
    });
};

let initialState={
    userData:'',
    AData:''

}

export const ChangeReducer= ( state=initialState,action )=> {
    switch(action.type) {
        case('ADD') :

    return{
        ...state,
        userData:action.payload,
    };

    case('SUB') :

    return{
        ...state,
        AData:action.payload,
    };


    default:
        return state;
        
    }                
};