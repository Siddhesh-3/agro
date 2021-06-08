import { Grid, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import "../App.css"
import Firstslider from './Firstslider';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) =>({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        display: 'flex',
    },
     paper: {
        marginRight: theme.spacing(2)
     }
}));

const Landing1 = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Product&Services'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Blank'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
                        <List>
                {['Crops'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['About Us'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['More'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            
            
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

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
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <MenuIcon name="md-close"
                                    style={{
                                        position: 'absolute',
                                        right: 40,
                                        top: 20,
                                    }}
                                    onClick={toggleDrawer(anchor, true)}
                                />
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </Hidden>
                </Grid>

                <Grid container item xs={12} spacing={0}>
                    <div>
                        <Firstslider />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Landing1
