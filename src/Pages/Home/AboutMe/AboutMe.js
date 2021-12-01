import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import resume from '../../../images/Resume_Mukitur_Rahman.pdf';

const AboutMe = () => {
    return (
        <div>
            <Container>
                <Typography style={{fontSize: 30}} variant="overline">Hi_</Typography>
                <Typography>
                I am looking for a new role and would appreciate your support. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript. I am also familier with React, Node, Express, MongoDB and Wordpress CMS.
                </Typography>
                <br/>
                <Typography>
                    <Button variant="contained"><SystemUpdateAltIcon/> <Link style={{textDecoration: 'none', paddingLeft: '8px', color: "white"}} to ={resume} target= "_blank">Download RESUME</Link></Button>
                </Typography>
            </Container>
            <br/>
            <Divider/>
            
        </div>
    );
};

export default AboutMe;