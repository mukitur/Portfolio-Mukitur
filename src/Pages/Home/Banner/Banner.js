import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Link, Typography } from '@mui/material';
import mukitPic from '../../../images/mukit.jpg';
import bg from '../../../images/bg.jpg';
import Icon from '@mui/material/Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, textAlign } from '@mui/system';

const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
        height:500
        
    }
    const verticalCenter={
        display: 'flex',
        alignItems: 'center',
        height: 500,
        border: 'ipx solid red'
    }
    return (
        <div style={{backgroundColor: '#f8f8f8'}}>
            <Container  sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{width: '70%'}} src={mukitPic} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={7} style={{...verticalCenter, textAlign: 'left'}}>
                        <Box>
                            <Typography style={{textAlign: 'left', fontWeight: 300}} variant='h3'>
                                Mohammad Mukitur Rahman
                            </Typography>
                            <Typography variant='h5'>
                                React Developer, Dhaka-Bangladesh
                            </Typography>
                            <br/><br/>
                            <Typography variant='h6'>
                            <SettingsCellIcon/> +880 1715 0555 63
                            </Typography>
                            <Typography variant='h6'>
                                <MarkEmailUnreadIcon/> mukitur.rahman2050@gmail.com
                            </Typography>
                            <br/>
                            <LinkedInIcon/>
                            <GitHubIcon/>
                        </Box>
                    </Grid>   
                </Grid>
    </Container>
        </div>
    );
};

export default Banner;