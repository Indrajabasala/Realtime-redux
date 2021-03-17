import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function Registeras() {
//     const classes= useStyles()
//     const useStyles = makeStyles((theme) => ({
//     paper: {
//           textAlign:'center'
//     }
// }));
    
    return(
        <div>
        
            <Button variant="contained" color="primary"> Doctor </Button>
            <Button variant="contained" color="primary"> Patient </Button>

        
        </div>
    )
}

export default Registeras