import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./../../style.css";
import Navbar from "./../Navbar";
import Hero from "./../Hero";
import Footer from "./../Footer";



export default class Cendekiawan extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />

                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <h1><b>About Cerdikiawan</b></h1> 
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../images/isi6.jpg")} alt="isi6" />     
                    </Link>
                    </div>
                    <div className="col-sm-6" style={{padding: '30px'}}>
                    <h1><b>A Clever Flock of the Nation’s Children</b></h1>
                    <p>
                        A cerdikiawan is a clever Indonesian with copious tricks up their sleeves. 
                        They bring out the best of themselves to outsmart every problem. 
                    </p>
                    <p>Nothing can stop them because a Cerdikiawan always finds a way to hack through any situation. </p>
                    </div>
                </div>
                </div> 
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6" style={{padding: '30px'}}>
                    <h1><b>#ThereIsAlwaysAWay </b></h1>
                    <p>
                        The spirit of Cerdikiawan is reflected in Gojek, which was originally formed to hack traffic jams and problems.  
                    </p>
                    <p>Now Gojek provides more than 20 services to help you hack your daily challenges.</p>
                    <p>
                        Should you arrive at the office early? GoCar got you covered. 
                        Your first day in the new office? Order GoFood to make new friends. 
                    </p>
                    <p>Whatever the problem, #PastiAdaJalan with Gojek. </p>
                    </div>
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../images/isi7.jpg")} alt="isi7" />     
                    </Link>
                    </div>
                </div>
                </div> 
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../images/isi8.jpg")} alt="isi8" />     
                    </Link>
                    </div>
                    <div className="col-sm-6" style={{padding: '30px'}}>
                    <h1><b>Be a Cerdikiawan </b></h1>
                    <p>Let’s be a part of Cerdikiawan with Gojek!</p>
                    <p>
                        Do you have any unique innovations to hack or outsmart your daily problems? 
                        If yes, stay tune! Because something exciting is coming along with great prizes.
                    </p>
                    <p>Keep your eyes on this page, and be the first to join and win.</p>
                    </div>
                </div>
                </div>
                {/* =============================1 GRID======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <img className="img-responsive img" src={require("./../../images/header1.webp")} alt="header1" /> 
                </div>
                </div>
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6" style={{padding: '30px'}}>
                    <h1><b>Show your smart innovation!</b></h1>
                    <p>Take a picture of your smart innovation using the Cerdikiawan Instagram 
                        filter from @gojekindonesia and upload it to your social media. Don’t forget to tag us! </p>
                    <p>
                        <button className="button">T&amp;C</button>
                        <button className="button">Submit Now</button>
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../images/isi9.jpg")} alt="isi9" />     
                    </Link>
                    </div>
                </div>
                </div>
                {/* =============================HERO======================================= */}
                <div className="hero-image" style={{marginTop: '85px'}}>
                <img className="img-responsive" style={{width: '100%'}} src={require("./../../images/header2.png")} alt="header2" /> 
                </div>
                {/* =============================SLIDER======================================= */}
                <div className="container" style={{marginTop: '85px', marginBottom: '85px'}}>
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
                        <img src={require("./../../images/slidera.png")} alt="slidera" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../images/sliderb.png")} alt="sliderb" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../images/sliderc.png")} alt="sliderc" style={{width: '100%'}} />
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

                <Footer />     
            </div>
        )
    }
}
