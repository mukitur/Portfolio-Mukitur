import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import prj1 from '../../../images/portfolio/smart-watch/sw1.jpg';
import prj2 from '../../../images/portfolio/smart-watch/sw2.jpg';
import prj3 from '../../../images/portfolio/smart-watch/sw3.jpg';
import { Link } from 'react-router-dom';

const WatchWorld = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{marginTop: '50px'}}>
                <Typography style={{fontSize: '40px'}} variant='h1'>
                    Project Name: Watch World (Online Shop)
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                </Typography>
                <Typography style={{fontSize: '20px'}} variant='body2'>
                    Project Description: This project is developed based on Niche product (Smart watch). Users can experience different types of smart watch with affordable price. Users can visit all product by login and can place order. If a user wants to update order, he/she can do easily through admin dashboard. We developed separate admin Dashboard for users and admin. Main admin can add product, delete order, can make another user as an admin.
                </Typography>
                <br/>
                <Typography variant="overline">
                    Technology:  React, React Router, Firebase authentication, Material UI, Context API, Node, Express, MongoDB
                </Typography><br/>
                <Typography variant="h6">
                    Live Site: https://watch-world-14cd8.web.app/ 
                </Typography><br/><br/>
                <Typography variant="overline">
                    <img style={{width: '50%'}} src={prj1} alt=""/>
                    <img style={{width: '50%'}} src={prj2} alt=""/>
                    <img style={{width: '50%'}} src={prj3} alt=""/>
                </Typography>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default WatchWorld;