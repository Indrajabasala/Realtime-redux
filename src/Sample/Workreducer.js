
export const login = (number) => dispatch => {
    dispatch({
        type: 'ADD_COUNT',
        payload: number,
    });
           
};

let initialState = {
    userData : ''
}

export const WorkReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COUNT':
        return {
          ...state,
          userData: action.payload,
         };
      default:
        return state;
    }
  };
  
