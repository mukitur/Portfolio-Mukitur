import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeProjects from '../Home/HomeProjects/HomeProjects';

const Projects = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
            <HomeProjects></HomeProjects>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Projects;