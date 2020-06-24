import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';

class Navbar extends Component {
    state = {
        isOpen : false
    }
    handleToggle = () => {
        this.setState(state => ({
            isOpen : !state.isOpen
        }))
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/'>
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='nav-icon'/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/' style={{display:'inline-block'}}>Home</Link>
                            <Link to='/rooms' style={{display:'inline-block'}}>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;