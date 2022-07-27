import React from 'react';
// import PropTypes from 'prop-types';
import Slider from '../Components/Slider';
import Header from '../Components/Header';
import Register from '../Components/Register';
import { Grid } from '@mui/material'

function Login(props) {
    return (
        <div className='container'>
        <div className='header'>
            <Header />
        </div>
        <Grid
                container
                direction="row"
                justifyContent="space-between"
            >
                <Grid item xs="auto">
                <Slider />
                </Grid>
                <Grid>
                <Register />
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
