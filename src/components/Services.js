import React, {Component} from 'react';
import {FaCocktail , FaHiking , FaShuttleVan , FaBeer} from "react-icons/fa";
import Title from "./Title";
class Services extends Component {
    state = {
        services : [
            {
                icon : <FaCocktail />,
                title : 'Free Cocktail',
                info :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta libero nesciunt?'
            },
            {
                icon : <FaHiking />,
                title : 'Endless Hiking',
                info :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta libero nesciunt?'
            },
            {
                icon : <FaShuttleVan />,
                title : 'Free Shuttle',
                info :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta libero nesciunt?'
            },
            {
                icon : <FaBeer />,
                title : 'Stronges Drinds',
                info :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta libero nesciunt?'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
            <Title title='services'/>
            <div className='services-center'>
                {this.state.services.map((item,index) => {
                    return <article className='service' key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        );
    }
}

export default Services;