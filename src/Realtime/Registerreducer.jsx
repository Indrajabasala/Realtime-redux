export const  doctor = (data,role)=> (dispatch)=> {
    if(role==='doctor') {
    dispatch({
        type: 'DOCTOR',
        payload : data
    });
}else{
       dispatch({
        type: 'PATIENT',
        payload : data
    }); 
}
};
 
// export const  patient = (bb)=> (dispatch)=> {
//     dispatch({
//         type: 'PATIENT',
//         payload : bb
//     });
// };

let initialState={
    doctorData:[],
    patientData:[]

}

export const Registerreducer= ( state=initialState,action )=> {
    switch(action.type) {
        case('DOCTOR') :

    return{
        ...state,
        doctorData:[...state.doctorData,action.payload],
    };

    case('PATIENT') :

    return{
        ...state,
        patientData:[...state.patientData,action.payload],
    };


    default:
        return state;
        
    }                
};

