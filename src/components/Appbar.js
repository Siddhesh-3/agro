import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { useHistory } from "react-router-dom"
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

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

const Appbar = () => {
    let history = useHistory()
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }

        //change page
        const changePage = (pagename) => {
            history.push({
                pathname: pagename,
            })
        }
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
        <div>
        <Grid lg={12} xs={12} sm={12} container direction="row">
        <Grid container item xs={5} spacing={1}>
                    <img src="logo.png"  alt="logo" className="logo" />
        </Grid>
        <Grid container item xs={7} spacing={2} style={{ marginTop: "3%" }}>
                    <Hidden xsDown>
                        <h4 className="menu"
                        onClick={() => {
                          changePage("/")
                        }}
                        >मुख्यपृष्ठ</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}
                        onClick={() => {
                            changePage("/products")
                        }}
                        >
                        उत्पादन आणि सेवा</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}
                         onClick={() => {
                              changePage("/crops")
                             }}
                        >
                        पिके</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}>blank</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}
                        onClick={() => {
                         changePage("/about")
                         }}
                        >
                        आमच्याबद्दल</h4>
                        <h4 className="menu" style={{ marginLeft: "8%" }}
                        onClick={() => {
                                  changePage("/more")
                                 }}
                        >
                        अधिक</h4>
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
        </Grid>


        </div>
    )
}

export default Appbar
