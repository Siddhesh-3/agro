import React from 'react'
import "../App.css"
import Firstslider from './Firstslider';

import { makeStyles } from '@material-ui/core/styles';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import Landing4 from './Landing4';
import Footer from './Footer';
import Appbar from './Appbar';
import { Grid, Hidden } from '@material-ui/core'
const Landing1 = () => {

    return (
        <div> <br></br>
    <Appbar/>
            <Grid lg={12} xs={12} sm={12} container direction="row">
            
                <Grid container item xs={12} spacing={0}>
                    <div>
                        <Firstslider />
                    </div>
                </Grid>
            </Grid>
            <Landing2/>
            <Landing3/>
            <Landing4/>
            <Footer/>
        </div>
    )
}

export default Landing1
