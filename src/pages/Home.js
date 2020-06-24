import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRoom";
import {RoomContext} from "../context";
import Button from '../components/styledHero'

const Home = () => {

    return (
        <React.Fragment>
            <Hero hero='defaultHero'>
                <Banner title='luxurious rooms' subtitle='deluxe rooms stargin at 3000'>
                    <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
                </Banner>
            </Hero>
        <Services />
        <FeaturedRooms />
        {/* <Button>
            hello
        </Button> */}
        </React.Fragment>
    );
};

export default Home;