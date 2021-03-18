import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Registeras from './Registeras';
import Register from './Register';
import Home from './Home';
// import ProtectRoutes from './protectedRoutes'

const Sample =()=> {
    return(
        <BrowserRouter>
        <Switch>

            {/* <ProtectRoutes path='/Welcome' Component={Home} /> */}

            <Route exact path="/">
            <Welcome/>
            </Route>
        

            <Route exact path="/registeras">
                <Registeras/>
            </Route>
             
            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/register">
                <Register/>
            </Route>

            <Route exact path="/home">
                <Home/>
            </Route>
            

          
            {/* <Route path="/">
                <Register/>
            </Route> */}

        </Switch>
        </BrowserRouter>
    )
}
export  default Sample
