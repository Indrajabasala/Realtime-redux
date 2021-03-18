import React from 'react'
import doctors from './Images/doctors.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import DehazeIcon from '@material-ui/icons/Dehaze';
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor:'#398ccc',
    fontSize:'35px'

  },
  Grid: {
      backgroundColor:'lightgreen'
  },

  footer: {
   
 backgroundColor:'#398ccc',
 position:'absolute',
 bottom:'0',
 width:'100%',
  height:'60px',   /* Height of the footer */
 background:'#6cf'
    
  }
}));


function Home() {
    const classes = useStyles();
    let history = useHistory();
    let role=history.location.state.role
    const doctorData= useSelector(state => state.doctorData);
    const patientData= useSelector(state => state.patientData);
    console.log('doctorData',doctorData)
        console.log('patientData',patientData)

        let userData;

        if(role === 'patient'){
          userData = doctorData
        }else{
          userData = patientData
        }

console.log('userData', userData)

 const handleChange=()=> {
  history.push({pathname: '/'});
 }

    return(
        <div>
            
            <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper className={classes.paper}> <b>Home Page</b> <button onClick={handleChange}  style={{marginLeft:'1000px',fontSize:'20px'}} >signout</button> </Paper>
        </Grid>
        </Grid>
     <img  style={{  marginLeft:'-3px', marginTop: '0px',
     height:'235px',  width:'1441px' }} src={doctors} alt='doctor' /> <br/> <br/>
    <h2 align='middle'> {role === 'patient' ? 'Doctor' :'Patient'} List </h2> <br/>
    <ol>
     <div style={{marginLeft:'500px'}}>
    {userData.map((each)=> <li>{each.email}</li>)}
    </div>
    </ol>

    <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
          <Paper className={classes.footer}>  </Paper>       
         
         
        </Grid>
        </Grid>
        </div>
    )
}

export default  Home