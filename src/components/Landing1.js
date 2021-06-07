import { Button, Grid, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import "../App.css"
import Firstslider from './Firstslider';
import Landing5 from "./Landing5"
const Landing1 = () => {
    return (
        <div> <br></br>
            <Grid lg={12} xs={12} sm={12} container direction="row">
                <Grid container item xs={5} spacing={1}>
                    <img src="logo.png" style={{ height: "60%", width: "60%", marginLeft: "10%", padding: "4%" }} alt="logo" />
                </Grid>

                <Grid container item xs={7} spacing={2} style={{ marginTop: "3%" }}>
                    <Hidden xsDown>
                        <h4 className="menu" >Home</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>Product&Services</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>blank</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>Crops</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>About Us</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>More</h4>
                    </Hidden>
                    <Hidden smUp>
                        <MenuIcon name="md-close"
                            style={{
                                position: 'absolute',
                                right: 40,
                                top: 20,
                            }} />
                    </Hidden>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <div>
                   <Firstslider/>
                    </div>
                </Grid>              
            </Grid>
        </div>
    )
}

export default Landing1
