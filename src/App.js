import './App.css';
import React from 'react';
// import Counter from './counter'
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
// import {WorkReducer} from './Sample/Workreducer'
// import {ChangeReducer} from './Sample/ChangeReducer'
// import {Getreducer} from './Sample/Getreducer';
import thunk from "redux-thunk";
// import Get from './Sample/Get';
// import Change from './Sample/Work';
// import Practice from './Sample/Change';
// import Todo from './Sample/Todo';
// import {Todoreducer} from './Sample/Todoreducer';
// import Welcome from './Realtime/Welcome';
// import SignUp from './Realtime/Register';
// import Slider from './Realtime/Slideshow/Slider'
// import ButtonAppBar from './Realtime/Welcome';
// import Login from './Realtime/Login';
import Sample from './Realtime/Route';
// import Registeras from './Realtime/Registeras';
import {Registerreducer} from './Realtime/Registerreducer'
// import Home from './Realtime/Home';
// import Demo from './Demo';




 const store = applyMiddleware(thunk)(createStore)(Registerreducer);   
{/* <Provider store={store} >
     {/* <Counter /> */}
     {/* <Change/> */}
    //  <Practice/>
    {/* <Get/> */}
     {/* <Todo/> */}
      // </Provider>
      // */}

 
function App() {
  return (
  
     <>
     {/* <Slider/> */}
     {/* <Welcome/> */}
     {/* <ButtonAppBar/> */}
     {/* <Login/> */}
{/* <SignUp/> */}
<Provider store={store}  >
<Sample/>
{/* <Demo/> */}
{/* <Home/> */}

</Provider>
     {/* <Counter /> */}
     {/* <Change/> */}
     {/* <Practice/> */}
    {/* <Get/> */}
     {/* <Todo/> */}
     {/* <Registeras/> */}
      {/* </Provider> */}

     </>
     
    
  );
}

export default App;
