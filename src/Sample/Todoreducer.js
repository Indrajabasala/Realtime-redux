export const  Test =(list)=>(dispatch) =>{
    dispatch({
        type:'ADD',
        payload:list
    })

} 
 let initialState={
     AData:[]
 }

export  const Todoreducer =(state=initialState,action) => {
    switch(action.type) {
        case('ADD'):
         return{
             ...state,
             AData:[...state.AData,action.payload],
            
         };
         default:
              return state;
      
    }

}