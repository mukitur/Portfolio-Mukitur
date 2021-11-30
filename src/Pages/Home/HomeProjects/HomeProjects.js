import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import prj1 from '../../../images/p1.png';
import { Link } from 'react-router-dom';

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
                        <Typography style={{fontSize: '30px'}} variant='h1'>
                             WATCH WORLD SHOP
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                        This project is developed based on Niche product (Smart watch). Users can experience different types of smart watch with affordable price. Users can visit all product by login and can place order. If a user wants to update order, he/she can do easily through admin dashboard. We developed separate admin Dashboard for users and admin. Main admin can add product, delete order, can make another user as an admin.
                        </Typography>
                        <br/>
                        <Typography variant="overline">
                            Technology:  React, React Router, Firebase authentication, Material UI, Context API, Node, Express, MongoDB
                        </Typography>
                        <br/><br/>
                       
                        <Link style={{textDecoration: 'none'}} to = "/watchworld"><Button  variant="contained" >Details...</Button></Link>
                    </Grid>
                   
                </Grid>
                <br/>
                {/* Portfolio2 */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={prj1} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <br/>
                        <Typography style={{fontSize: '30px'}} variant='h1'>
                                AIR CLOUD TOURS
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                        This project is developed based on a travel agency. Here shows different types of tour packages. The company arrange tour packages for domestic & international with affordable price. Clients can visit different types of packages and book package. Users can manage order, update order by login into admin panel.
                        </Typography>
                        <br/>
                        <Typography variant="overline">
                            Technology:  React, React Router, Firebase authentication, Bootstrap, Context API, Node, Express, MongoDB
                        </Typography>
                        <br/><br/>
                       
                        <Link style={{textDecoration: 'none'}} to = "/aircloud"><Button  variant="contained" >Details...</Button></Link>
                    </Grid>
                   
                </Grid>
                <br/>
                {/* portfolio3 */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={prj1} alt=""/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <br/>
                        <Typography style={{fontSize: '30px'}} variant='h1'>
                             DENTAL STUDIO (HEALTHCARE)
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                        This project is a dental clinic website. There are different services related to teeth. Users can visit different teeth problem related service, doctor’s portfolio. Focused on React front end, no backend included with this website but firebase authentication system is developed.
                        </Typography>
                        <br/>
                        <Typography variant="overline">
                            Technology:  React, React Router, Firebase authentication, Bootstrap, Context API, Font Awesome, React Hook Form
                        </Typography>
                        <br/><br/>
                       
                        <Link style={{textDecoration: 'none'}} to = "/dental"><Button  variant="contained" >Details...</Button></Link>
                    </Grid>
                   
                </Grid>
            </Container>
        </div>
    );
};

export default HomeProjects;