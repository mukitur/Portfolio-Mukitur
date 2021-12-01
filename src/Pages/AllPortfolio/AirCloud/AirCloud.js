import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import prj1 from '../../../images/portfolio/Tours/travel1.jpg';
import prj2 from '../../../images/portfolio/Tours/travel2.jpg';
import prj3 from '../../../images/portfolio/Tours/travel3jpg.jpg';

const AirCloud = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{marginTop: '50px'}}>
                <Typography style={{fontSize: '40px'}} variant='h1'>
                    Project Name: Air Cloud Tours (Tours & Travel)
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                </Typography>
                <Typography style={{fontSize: '20px'}} variant='body2'>
                This project is developed based on a travel agency. Here shows different types of tour packages. The company arrange tour packages for domestic & international with affordable price. Clients can visit different types of packages and book package. Users can manage order, update order by login into admin panel.
                </Typography>
                <br/>
                <Typography variant="overline">
                Technology:  React, React Router, Firebase authentication, Material UI, Context API, Node, Express, MongoDB
                </Typography><br/>
                <Typography variant="h6">
                    Live Site: https://aircloud-tours.web.app/
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

export default AirCloud;