import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: 'whitesmoke',
            textDecoration: 'none' 
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
          [theme.breakpoints.down('sm')]: {
            display: 'none !important'
        }
        },
        navLogo: {
          [theme.breakpoints.down('sm')]: {
            textAlign: 'right'
        }
        },
        mobileNavItem: {
          textDecoration: 'none',
          color: "black"
        }

    })
    
    const {navItem, navIcon, navItemContainer, navLogo, mobileNavItem } = useStyle();

    //drawer add

    const [state, setState] = React.useState(false);
  
    /* const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
   */
    const list = (
      <Box
        sx={{ width:250 }}
        role="presentation"
        //onClick={toggleDrawer(anchor, false)}
        //onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
        
          <ListItem button>
          <ListItemIcon>
                 
              </ListItemIcon>
              <Link className={mobileNavItem} to ="/">Home</Link>
          </ListItem>
          <Divider />
          <ListItem button>
              <Link className={mobileNavItem} to ="/about">About</Link>
          </ListItem>
          <Divider />
          <ListItem button>
              <Link className={mobileNavItem} to ="/projects">Projects</Link>
          </ListItem>
          <Divider />
          <ListItem button>
              <Link  className={mobileNavItem}to ="/contact">Contact</Link>
          </ListItem>
          <Divider />
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
      <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
              <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={navIcon}
                    onClick={()=>setState(true)}
                    sx={{ mr: 2 }}  
                  >
                  <MenuIcon/>
                </IconButton>
                <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link className={navItem} to = "/">Mukitur's Profile</Link>
                </Typography>
                <Box className = {navItemContainer}>
                    <Link className={navItem} to = "/"><Button color="inherit">Home</Button></Link>
                    <Link className={navItem} to = "/about"><Button color="inherit">About</Button></Link>
                    <Link className={navItem} to = "/projects"><Button color="inherit">Projects</Button></Link>
                    <Link className={navItem} to = "/contact"><Button color="inherit">Contact</Button></Link>
                </Box>
                
              </Toolbar>
            </AppBar>
          </Box>

          <div>
      
        <React.Fragment>
          <Drawer
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      
    </div>
        </>  
      );
};

export default Navigation;