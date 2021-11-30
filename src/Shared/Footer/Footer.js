import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#f8f8f8'}}>
            <Container style={{marginTop: 50}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    
                </Grid>
                <Grid item xs={12} md={8}>
                    
                    <Typography style={{fontSize: 30}} variant="overline">
                        Get In Touch_
                    </Typography>
                    <br/>
                    <Typography variant="overline">
                        or write me a letter here_
                    </Typography>
                    <br/>
                    <Typography variant="overline">
                        <TextField id="standard-basic" label="Your Name" width= "100%" variant="standard" />
                    </Typography>
                    <br/>
                    <Typography variant="overline">
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </Typography>
                    <br/>
                    <Typography variant="overline">
                        <TextField id="standard-basic" label="Email" variant="standard" />
                    </Typography>
                    <br/> <br/>
                    <Typography>
                        <Button variant="contained">Send</Button>
                    </Typography>
                    <br/><br/>
                </Grid>
                <Grid item xs={12} md={2}>
                   
                </Grid>
            </Grid>
            </Container>
            
        </div>
    );
};

export default Footer;