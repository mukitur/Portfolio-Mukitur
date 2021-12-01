import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';

const Footer = () => {
    function sendEmail(e){
        
        emailjs.sendForm('service_yeryqij' , 'template_m1asw2e', e.target, 'user_jdWKYuVPcrmQs5UerXt2S')
        .then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))

        e.preventDefault();
    }
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
                    <form onSubmit={sendEmail}>
                        
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            defaultValue="Your Name"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="user_email"
                            defaultValue="Email Address"
                            size="small"
                        /><br/>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="message"
                            defaultValue="Message"
                            size="small"
                        />
                        <br/>
                        <Box style={{textAlign: 'center'}}>
                            <Button style={{marginTop: '20px'}} type="submit" variant="contained" size="large" endIcon={<SendIcon />}> Send
                            </Button>
                        </Box>
                        
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