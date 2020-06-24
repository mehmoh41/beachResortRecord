import React from 'react';
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title='404' subtitle='OOPS ! Page Not Found'>
                    <Link to='/' className='btn-primary'>Back To Home</Link>
                </Banner>
            </Hero>
        </div>
    );
};

export default Error;
