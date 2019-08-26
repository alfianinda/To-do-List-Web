import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor: 'white', borderColor: 'transparent'}}>
                    <div className="container-fluid" style={{margin: '15px 30px 15px 30px'}}>
                    <Link className="navbar-brand" to="./"><img src={require("./../Assets/images/gojek-logo_normal.svg")} className="img-responsive" alt="gojek-logo" /></Link>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="nav navbar-nav navbar-left">
                        <li><Link to="./about">About Us</Link></li> 
                        <li><Link to="./#">Services</Link></li>
                        <li><Link to="./https://www.gojek.com/blog/">Blog</Link></li>
                        <li><Link to="./https://www.gojek.com/faq/">Help Centre</Link></li>
                        <li><Link to="./#">Join Us</Link></li>
                        <li><Link to="./cendekiawan">Cerdikiawan</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <li><Link to="./#">English</Link></li> 
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}
