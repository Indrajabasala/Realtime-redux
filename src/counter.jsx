import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCounter} from './CounterReducer';
function Counter() {
    const dispatch = useDispatch();
    const a = useSelector( state => state.count)
     
  return (
    <div  >
        {a}
  <button onClick={()=> dispatch(addCounter(a+1))} >ADD</button>
    </div>
  );
}

export default Counter;
