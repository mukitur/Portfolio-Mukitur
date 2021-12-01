import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#f8f8f8'}}>
            <Container style={{marginTop: 50}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}/>
                <Grid item xs={12} md={6}>
                    
                    <Typography style={{fontSize: 30}} variant="overline">
                        write me a letter here_
                    </Typography>
                    <br/>
                    <form>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="productName"
                            defaultValue="Your Name"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="description"
                            defaultValue="Email Address"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="image"
                            defaultValue="Message"
                            size="small"
                        />
                        <br/>
                        <Button type="submit" variant="contained">Send</Button>
                        
                    </form>
                    <br/>
                    <Typography style={{textAlign: 'center', marginBottom: '20px'}}>
                        Copyright@2021. All rights Reserved.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={3}/>
            </Grid>
            </Container>
            
        </div>
    );
};

export default Footer;