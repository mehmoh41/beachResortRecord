import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
    return (
        <div>
            <Hero hero='roomsHero'>
                <Banner title='Rooms'>
                    <Link to='/' className='btn-primary'>Back To Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </div>
    );
};

export default Rooms;
