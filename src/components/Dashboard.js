import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import {CssBaseline, Drawer, AppBar, Toolbar, List, IconButton, Avatar, Hidden, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import MenuIcon from  '@material-ui/icons/Menu';
import DashboardMachineContent from './DashboardMachineContent';
import DashboardJobContent from './DashboardJobContent';
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
      backgroundColor: "#F0F4F5"
    },
    avatarIcon: {
        textAlign: 'left',
        [theme.breakpoints.up('md')] : {
            textAlign: 'right'
        }
    },
    toolbar: {
      paddingRight: 24, 
      backgroundColor: "white",
      boxShadow: "none",
      borderBottom: "1px solid #E3E7E8",
      textDecoration: "none"
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      padding: '0 8px',
      fontSize: 23,
      fontWeight: "bold",
      ...theme.mixins.toolbar,
    },
    appBar: {
      boxShadow: "none",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.up('md')] : {
        position: 'absolute',
      },
    },
    appBarShift: {
      [theme.breakpoints.up('md')] : {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      marginTop: 0,
      marginLeft: 7,
      marginRight: 5,
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'underline',
        background: 'transparent'
      },
    },
    menuIcon: {
      color: 'black',
      marginTop: 8,
      marginLeft: 18
    },
    title: {
      flexGrow: 1,
      color: "#333"
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      color: "white",
      backgroundColor: "#FF5722",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    link: {
      textDecoration: 'none',
      color: 'white'
    },
  });


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false,
            open: true,
            isLoading: false,
            error: null
        }
    }

    handleDrawerToggle = () => {
      this.setState(state => ({...state, mobileOpen: !state.mobileOpen }));
    };
    
    closeDrawerToggle = () => {
        this.setState(state => ({...state, mobileOpen: false }));
      };

    logout = () => {
      this.props.history.push("/");
    }

    render() {
        const {classes} = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbarIcon}>
                    AI Optimization
                </div>
                <List onClick={this.closeDrawerToggle}>
                    <Link to="/" style={{textDecoration: 'none', color: '#333'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Machines" />
                        </ListItem>
                    </Link>
                    <Link to="/jobs" style={{textDecoration: 'none', color: '#333'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Job" />
                        </ListItem>
                    </Link>
                </List>
            </div>
        )

        return(
            <div className={classes.root}>
                <CssBaseline />

                <AppBar position="absolute">
                    <Toolbar className={classes.toolbar}>
                        <Grid container>
                            <Hidden mdUp>
                                <Grid item xs={10}>
                                    <IconButton>
                                            <Avatar src="/img/anonim.jpg" className={classes.avatar} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={2} className={classes.avatarIcon}>
                                        <IconButton
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={this.handleDrawerToggle}
                                            className={classes.menuIcon}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                </Grid>
                            </Hidden>
                            <Hidden mdDown>
                                <Grid item xs={12} className={classes.avatarIcon}>
                                    <IconButton>
                                            <Avatar src="/img/anonim.jpg" className={classes.avatar} />
                                    </IconButton>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <Hidden mdUp implementation="css">
                    <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor='left'
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden mdDown>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>


                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />          
                        <Switch>
                            <Route path="/jobs" component={DashboardJobContent} />
                            <Route path="/" component={DashboardMachineContent} />
                        </Switch>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard)