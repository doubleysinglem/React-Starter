import React, {Component} from 'react';
import {NavLink}from 'react-router-dom'

class Layout extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink to="/" exact activeStyle={{fontWeight:'bold'}}>Home</NavLink></li>
                    <li><NavLink to="/test" activeStyle={{fontWeight:'bold'}}>Test</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Layout;
