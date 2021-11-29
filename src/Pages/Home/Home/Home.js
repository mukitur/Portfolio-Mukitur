import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import HomeProjects from '../HomeProjects/HomeProjects';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <HomeProjects></HomeProjects>
            <Footer></Footer>
        </div>
    );
};

export default Home;