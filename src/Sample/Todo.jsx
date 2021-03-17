import React ,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Test} from './Todoreducer';

function Todo() {
    const[state,setState]=useState({username:'', email:''})
    let {username,email}=state
    const dispatch=useDispatch();
      const users= useSelector(state => state.AData);
      

          console.log('check',users)
    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    
    }

    const handleSave=()=> {

        let data={
            username:state.username,
            email:state.email
        }
      
        dispatch(Test(data))
        setState({username:'', email:''})
    }

    return(
        <div> <br/> <br/>
           <label>username:</label> <input type="text" name={'username'} value={username} onChange={handleChange}></input> <br/> <br/>
           <label>email:</label> <input type="text" name={'email'} value={email} onChange={handleChange}></input><br/> <br/>
           <button onClick={handleSave}> submit</button>
           {users.map((each)=>{
               return(
                   <div>
                       <li>{each.username +'---' +  each.email}</li>
                   </div>
               )
                    
           })}
        </div>
    )
}

export default Todo