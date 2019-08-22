import React, { Component } from 'react';
import "./../style.css";

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div className="hero-image" style={{marginTop: '85px'}}>
                    <img className="img-responsive" style={{width: '100%'}} src={require("./../images/slider.png")} alt="slider" /> 
                </div>
            </div>
        )
    }
}
