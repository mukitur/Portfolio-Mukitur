import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;