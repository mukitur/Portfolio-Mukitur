import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import prj1 from '../../../images/portfolio/dental/dental1.jpg';

const DentalStudio = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{marginTop: '50px'}}>
                <Typography style={{fontSize: '40px'}} variant='h1'>
                    Project Name: Samarium Dental (Dental Studio)
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                </Typography>
                <Typography style={{fontSize: '20px'}} variant='body2'>
                This project is a dental clinic website. There are different services related to teeth. Users can visit different teeth problem related service, doctor’s portfolio. Focused on React front end, no backend included with this website but firebase authentication system is developed.
                </Typography>
                <br/>
                <Typography variant="overline">
                Technology:  React, React Router, Firebase authentication, Bootstrap, Context API, Font Awesome, React Hook Form
                </Typography><br/>
                <Typography variant="h6">
                    Live Site: https://samarium-dental-studio.web.app/
                </Typography><br/><br/>
                <Typography variant="overline">
                    <img style={{width: '50%'}} src={prj1} alt=""/>
                   
                </Typography>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DentalStudio;