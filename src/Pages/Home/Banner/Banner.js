import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import mukitPic from '../../../images/mukit.jpg';
import bg from '../../../images/bg1.jpg';
import Icon from '@mui/material/Icon';

const Banner = () => {
    const bannerBg = {
        background: `url({bg})`,
        height: '500px'
    }
    return (
        <div>
            <Container style={{bannerBg}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{width: '250px'}} src={mukitPic} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography style={{textAlign: 'left'}} variant='h3'>
                            Mohammad Mukitur Rahman
                        </Typography>
                        <Typography variant='h5'>
                            React Developer, Dhaka-Bangladesh
                        </Typography>
                        <br/><br/>
                        <Typography variant='h6'>
                            Cell: +880 1715 0555 63
                        </Typography>
                        <Typography variant='h6'>
                            Email: mukitur.rahman2050@gmail.com
                        </Typography>
                        
                    </Grid>   
                </Grid>
    </Container>
        </div>
    );
};

export default Banner;