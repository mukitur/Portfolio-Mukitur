import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Projects = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <h2>Projects</h2>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Projects;