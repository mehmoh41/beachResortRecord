import React, {Component} from 'react';
import {RoomContext} from "../context";
import defaultBg from '../images/defaultBcg.jpeg';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import StyledHero from "../components/styledHero";

class SingleRoom extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBg
        }
    }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
            <div className='error'>
                <h3>No such room found</h3>
                <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
            </div>
            )
        }
        const {name , description , capacity , price , extras , breakfast , pets , images ,size} = room;
        const [...defaultImg] = images;
        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBg}>
                <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
                </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImg.map(( image,index) => {
                            return <img src={image} alt={name} key={index}/>
                        })}
                    </div>
                    <div className='single-room-info'>
                        <article className='desc'>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className='info'>
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person` }</h6>
                            <h6>{pets?"pets allowed" : "pets not allowed"}</h6>
                            <h6>{breakfast && "free breakfast"}</h6>
                            <p></p>
                        </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>extras</h6>
                    <ul className='extras'>
                        {extras.map((item , index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;