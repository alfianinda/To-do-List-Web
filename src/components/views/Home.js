import React, { Component } from 'react';
import {Link} from "react-router-dom";

import Hero from "./../Hero";
import Cards from "./../Cards";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../Assets/images/isi1.jpg")} alt="isi1" />     
                    </Link>
                    </div>
                    <div className="col-sm-6" style={{padding: '70px'}}>
                    <h1><b>Meet Solv, Gojek’s new logo</b></h1>
                    <p style={{textAlign: 'justify'}}>Our new logo symbolizes Gojek’s transformation from being 
                        a ride-hailing service to becoming the largest Super App, 
                        with a variety of smart ways to eliminate hassles. 
                    </p>
                    <p><Link to="#">Find Out Here →</Link></p>
                    </div>
                </div>
                </div> 
                {/* ====================================SLIDER=========================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={require("./../../Assets/images/slider01.png")} alt="slidera" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../Assets/images/slider02.png")} alt="sliderb" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../Assets/images/slider03.png")} alt="sliderc" style={{width: '100%'}} />
                    </div>
                    </div>
                    {/* Left and right controls */}
                    <Link className="left carousel-control" to="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" />
                    <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="right carousel-control" to="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" />
                    <span className="sr-only">Next</span>
                    </Link>
                </div>
                </div>
                {/* =========================================CARDS================================================== */}
                <Cards />
            </div>
        )
    }
}
