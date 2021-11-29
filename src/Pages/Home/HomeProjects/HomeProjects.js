import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import prj1 from '../../../images/p1.png'

const HomeProjects = () => {
    return (
        <div>
            <Container>
                <Typography style={{fontSize: 30}} variant="overline">My Projects_</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={prj1} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <br/>
                        <Typography variant='h4'>
                             Watch World (Smart watch shop)
                        </Typography>
                        <br/>
                        <Typography variant='p'>
                        This project is developed based on Niche product (Smart watch). Users can experience different types of smart watch with affordable price. Users can visit all product by login and can place order. If a user wants to update order, he/she can do easily through admin dashboard. We developed separate admin Dashboard for users and admin. Main admin can add product, delete order, can make another user as an admin.
                        </Typography>
                        <br/>
                        <Typography variant="overline">
                            Technology:  React, React Router, Firebase authentication, Material UI, Context API, Node, Express, MongoDB
                        </Typography>
                        <br/><br/>
                        <Typography style={{textAlign:'right'}} variant='h6'>
                            https://watch-world-14cd8.web.app/
                        </Typography>
                        <br/>
                    </Grid>
                   
</Grid>
            </Container>
        </div>
    );
};

export default HomeProjects;