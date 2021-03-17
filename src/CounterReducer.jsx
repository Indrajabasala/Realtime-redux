export const addCounter = (number) => dispatch => {
    dispatch({
        type: 'ADD_COUNT',
        payload: number,
    });
           
};

let initialState = {
    count : 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_COUNT':
        return {
          ...state,
          count: action.payload,
         };
      default:
        return state;
    }
  };
  
