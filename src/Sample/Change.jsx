import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Sample, rev} from './ChangeReducer';
import {login} from './Workreducer'


function Practice() {
    const[state,setState]=useState({fullname:'',email:'',State:'',Country:''})
    let {fullname,email,Country,State}=state;
      const dispatch=useDispatch();
      const user= useSelector(state => state.userData);
      const user2= useSelector(state => state.AData);
      console.log('kkk',user)
      console.log('check',user2)

    
    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    
    const handleSave =(e)=> {
        e.preventDefault();

        let data={
            fullname,
            email
        }

        dispatch(Sample(data))
        // dispatch(login(data))
    }

    const onSave=(e)=> {
        e.preventDefault();

        let cos={
            State,
            Country
        }
        dispatch(rev(cos))

    }

    return(
        <div>
           <label> Fullname:</label> <input type='text' name='fullname' value={fullname} onChange={handleChange}></input> <br/> <br/>
           <label> email:</label> <input type='text' name='email' value={email} onChange={handleChange}></input> <br/> <br/>
           <button onClick={handleSave}> submit </button> <br/> <br/>

           <label> State:</label> <input type='text' name='State' value={State} onChange={handleChange}></input> <br/> <br/>
           <label> Country:</label> <input type='text' name='Country' value={Country} onChange={handleChange}></input> <br/> <br/>
           <button onClick={onSave}> submit </button>
        </div>
    )
}
export default Practice