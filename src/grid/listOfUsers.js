import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function ListOfUsers() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}> 
            <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
        </Grid>
    )
}

export default ListOfUsers
