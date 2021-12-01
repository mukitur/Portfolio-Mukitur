import { Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Typography style={{fontSize: 30}} variant="overline">
                    About
                </Typography>
                <Typography style={{fontSize: 16}} variant="body2">
                Each of our endeavors is guided by a strong sense of craftsmanship and passion for the web. We strive to create meaning and value for our customers and their users and seek to imbue our products with a sense of wonder. We are a diverse team of creatives from many backgrounds with a shared desire to help make the web a better place by crafting the best digital experiences.
                </Typography>
                <br/>
                <Typography style={{fontSize: 15}} variant="body2">
                Sometimes you need a flexible agency in order to get a lot done. We help you meet your business goals through our services & solutions with custom-fit pricing models and processes. We aim to be a successful partner on the journey of your business growth by creating vibrant and relevant brand experiences on every level. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.
                </Typography>
                <Typography style={{fontSize: 30}} variant="overline">
                    Skills:
                </Typography>
                <br/>
                <Typography style={{fontSize: 20}} variant="overline">
                    • Programming Language: Java Script, HTML5, CSS3
                </Typography>
                <br/>
                <Typography style={{fontSize: 20}} variant="overline">
                    • Libraries and Frameworks: ReactJS, Bootstrap, Material UI
                </Typography>
                <br/>
                <Typography style={{fontSize: 20}} variant="overline">
                    • Backend:  NodeJS, Express, Mongodb
                </Typography>
                <br/>
                <Typography style={{fontSize: 20}} variant="overline">
                    • Tools: VS Code, Github, Firebase, Chrome Dev Tool, Netlify, Heroku, Figma, Photoshop
                </Typography>
            </Container>
        </div>
    );
};

export default About;