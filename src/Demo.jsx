import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import DehazeIcon from '@material-ui/icons/Dehaze';
import {useSelector} from 'react-redux';
// import { useHistory } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
      function Demo() {
        const classes = useStyles();

    return(
        <div>
             <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
                  <Paper className={classes.paper}> <b>Home Page</b>  </Paper>
        </Grid>
        </Grid>
        <Grid container spacing={4}  direction="row">
        <Grid item xs={12}>
          <Paper className={classes.footer}>  </Paper>       
         
         
        </Grid>
        </Grid>


        </div>
    )
}
export default Demo
