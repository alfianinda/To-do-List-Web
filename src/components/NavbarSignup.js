import React, { Component } from 'react';

export default class NavbarSignup extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor: 'rgb(142, 142, 240)', borderColor: 'transparent'}}>
                    <div className="container-fluid" style={{margin: '15px 50px 15px 50px'}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="Navbar">
                        <ul className="nav navbar-nav navbar-left tulis-putih">
                        <li>Todos</li> 
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}
