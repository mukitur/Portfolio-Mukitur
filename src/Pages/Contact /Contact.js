import { Container, Typography } from '@mui/material';
import { typography } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container style={{marginTop: '50px'}}>
                <Typography style={{fontSize: 40}} variant="h1">
                    I am confident, and dedicated for works. I am always interested in new projects, big or small.
                </Typography>
                <br/>
                <Typography className="contact-items" variant='h6'>
                    <ContactMailIcon className="contact-icon"/> House#370, East Azampur, Uttara, Dhaka-1230. Bangladesh.
                </Typography>
                <Typography className="contact-items" variant='h6'>
                    <SettingsCellIcon className="contact-icon"/> +880 1715 0555 63
                </Typography>
                <Typography className="contact-items" variant='h6'>
                    <MarkEmailUnreadIcon className="contact-icon"/> mukitur.rahman2050@gmail.com
                </Typography>
                <Typography className="contact-items" variant='h6'>
                    <LinkedInIcon lassName="contact-icon"/> linkedin.com/in/mukiturrahman/         
                </Typography>
                <Typography className="contact-items" variant='h6'>
                    <GitHubIcon lassName="contact-icon"/> https://github.com/mukitur         
                </Typography>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;