import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {login} from './Workreducer'

function Change() {
    const dispatch = useDispatch();
    const userdata = useSelector( state => state.userData);
    
    console.log('kkk',userdata)
    const [state,setState]=useState({ email:'' ,password:'' })
        let { email,password}=state;

    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSave=(e)=> {
       e.preventDefault();

        let data={
            email,
            password
        }
         dispatch(login(data))

    }
    return(
        <div>
            <input  type='text' name='email'  value={email}  onChange={handleChange}></input>
            <input  type='text' name='password'  value={password} onChange={handleChange} ></input>
            <button onClick={handleSave}>sumbit</button>


        </div>
    )
}

export default Change

