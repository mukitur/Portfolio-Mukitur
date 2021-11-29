import { Container, Divider, Typography } from '@mui/material';
import React from 'react';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Button from '@mui/material/Button';
import { typography } from '@mui/system';

const AboutMe = () => {
    return (
        <div>
            <Container>
                <Typography style={{fontSize: 30}} variant="overline">Hi_</Typography>
                <Typography>
                I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                </Typography>
                <br/>
                <Typography>
                    <Button variant="contained"><SystemUpdateAltIcon/> Download Resume</Button>
                </Typography>
            </Container>
            <br/>
            <Divider/>
            
        </div>
    );
};

export default AboutMe;