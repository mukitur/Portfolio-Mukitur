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
        }

    })
    
    const {navItem, navIcon, navItemContainer, navLogo} = useStyle();
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky">
            <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className={navIcon}
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
      );
};

export default Navigation;