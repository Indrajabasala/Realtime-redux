import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Grid, Container} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import doctor from './Images/doctor.jpg';
import { useHistory, withRouter } from "react-router-dom";
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },

  para: {
    fontSize:'20px',
    fontfamily: 'Lucida Console',
    // font-family: "Times New Roman" ;
  color:'green'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black',
    backgroundColor:' #d1d7e0'
    
  },

  test : {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black',
    backgroundColor:' #d1d7e0',
    height: '250px',
    width: '600px',
    padding: '70px'
  },

  page:{
    backgroundColor:'white'

  },

//   doctor :{
//     width: '424px',
//     margintop: '-50px',
//     marginright: '212px',
//     marginleft: '-67px'
// }  
}));

 function Welcome() {
  const classes = useStyles();

  let history = useHistory();
 
const handleRoute=(page)=> {
  history.push({pathname: '/registeras', state: { page }});
};

  return (
    <div className={classes.page}>
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#24292e'}}>
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Welcome to my Page 
          </Typography>
          <Button color="inherit"    onClick={() => handleRoute('register')}  >Register</Button>
          <Button color="inherit"  onClick={()=> handleRoute('login')}  >Login</Button>
                </Toolbar>
                     </AppBar>
                     <br/>
                     <Grid container spacing={4}  direction="row">
        <Grid item xs={12} className={classes.Grid}>
          <Paper className={classes.paper}>A physician or medical doctor is a person who uses medicine to treat illness <br/> and injuries to improve a patient's health. In most countries, the basic medical degree qualifies a person to treat patients <br/>and prescribe appropriate treatment, including drugs. A physician may also do the simplest kinds of surgery. </Paper>
        </Grid>
        </Grid>
<br/>
<div className="row">
  <div className="col-6" >
        <Grid container spacing={4} style={{marginLeft:"70px"}} >
        <Grid item className={classes.Grid}>
          <Paper className={classes.test}>  Dentist <br/> Becoming a doctor requires you to commit a great deal of time and study in order to practice medicine </Paper>
        </Grid>
        </Grid>
  </div>
        <div className="col-6">
        <Grid container spacing={4} >
        <Grid item xs={6} className={classes.Grid}>
          <Paper className={classes.test} >
            <img  style={{ marginTop:'-50px'}}    src={doctor} alt='doctor' />
            
          </Paper>
        </Grid>
        </Grid>
        </div></div> <br/>
        <br/> 
        <div className="row">
        <div className="col-6">
        <Grid container spacing={4}  style={{marginLeft:"70px"}} >
        <Grid item xs={6} className={classes.Grid}>
          <Paper className={classes.test}> Gynaecologist <br/> A gynecologist treats the overall health of their female patients, treating problems and diseases of the female reproductive system. </Paper>
        </Grid>
        </Grid>
        </div>
        <div className="col-6">
        <Grid container spacing={4} >
        <Grid item xs={6} className={classes.Grid}>
          <Paper className={classes.test}> Orthopaedic surgeon <br/> ENT Specialists focus on areas related to ear, nose, and throat, and sometimes even ailments related to the neck or the head. </Paper>
        </Grid>
        </Grid>
        </div></div>
      
    </div>
    </div>

  );
}

export default Welcome