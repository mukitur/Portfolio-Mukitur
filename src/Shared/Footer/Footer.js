import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#f8f8f8'}}>
            <Container style={{marginTop: 50}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography style={{fontSize: 30}} variant="overline">
                        Get In Touch_
                    </Typography>
                    <Typography variant="h6">
                        Cell: +880 0117 0555 63
                    </Typography>
                    <Typography variant="h6">
                        Email: mukitur.rahman2050@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <br/>
                    <Typography variant="overline">
                        or write me a letter here_
                    </Typography>
                    <br/>
                    <Typography variant="overline">
                        <TextField id="standard-basic" label="Your Name" variant="standard" />
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
                <Grid item xs={12} md={4}>
                   
                </Grid>
            </Grid>
            </Container>
            
        </div>
    );
};

export default Footer;