import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./../../style.css"
import Navbar from "./../Navbar";
import Hero from "./../Hero";
import Footer from "./../Footer"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../images/isi1.jpg")} alt="isi1" />     
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
                        <img src={require("./../../images/slider01.png")} alt="slidera" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../images/slider02.png")} alt="sliderb" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../images/slider03.png")} alt="sliderc" style={{width: '100%'}} />
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
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <h1><b>Our Services</b></h1>
                <h1><b>Transport &amp; Logistics</b></h1>
                <p>Moving something (or someone) from 
                    point A to point B? Our Gojek drivers in green jackets and helmets save your time, and energy.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/icon1.png")} alt="icon1" />
                        <h3 className="text-center"><b>goride</b></h3>
                        <p>Over 2 million drivers nationwide are ready
                        to drive you safely through the traffic.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/icon2.png")} alt="icon2" />
                        <h3 className="text-center"><b>gocar</b></h3>
                        <p>Hundreds of thousands of drivers to drive you safely
                        with comfort and convenience.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/icon3.png")} alt="icon3" />
                        <h3 className="text-center"><b>gosend</b></h3>
                        <p>Fast, reliable, and convenient delivery service for your
                        daily needs. Order GoSend now!
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/icon4.png")} alt="icon4" />
                        <h3 className="text-center"><b>gobox</b></h3>
                        <p>Moving or sending bulky items is now easy and convenient
                        with GoBox.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                {/* =========================================3 GRIDS of 4================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Food &amp; FMCG</b></h1>
                <p>Order food from a whole lotta restaurants, get medicines delivered in a jiffy, 
                    or fill your shopping cart from many a mart.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconmerah1.png")} alt="iconmerah1" />
                        <h3 className="text-center"><b>gofood</b></h3>
                        <p>The largest good delivery services in Indonesia and Southeast Asia.</p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconmerah2.png")} alt="iconmerah2" />
                        <p>Enjoy a variety of favorite cuisine consisting foods, beverage, traditional
                        snacks, trending snacks &amp; exciting events at the GoFood Culinary Festival.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconmerah3.png")} alt="iconmerah3" />
                        <h3 className="text-center"><b>gomed</b></h3>
                        <p>Use GoMed for all your medical needs. Buy medicines , vitamins, etc.
                        from licensed pharmacies.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3" />
                </div>
                </div>
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Payments</b></h1>
                <p>From split the bills to donations, we make payments reliable, easy and delightful for our customers and merchants alike.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconbiru1.png")} alt="iconbiru1" />
                        <h3 className="text-center"><b>gopay</b></h3>
                        <p>Easy transaction across Gojek services and merchants.</p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconbiru2.png")} alt="iconbiru2" />
                        <h3 className="text-center"><b>gobills</b></h3>
                        <p>Bayar tagihan listrik, BPJS, gas, air, tv, kabel, internet,
                        beli token listrik. Tanpa antri dan bisa pakai GoPay, bayar
                        tagihan apapun di GoBiils, aja!
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconbiru3.png")} alt="iconbiru3" />
                        <h3 className="text-center"><b>gopoints</b></h3>
                        <p>Receive a token for each transaction, swipe them to earn points, and 
                        get amazing rewards.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconbiru4.png")} alt="iconbiru4" />
                        <h3 className="text-center"><b>paylater</b></h3>
                        <p>Order any Gojek service or from any Gojek partner and pay at the end 
                        of the month with PayLater.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                {/* =========================================4 GRIDS================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>Daily Needs</b></h1>
                <p>Those regular chores that call for your attention? We have all products under daily needs to make your life simpler and hassle-free.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconkuning1.png")} alt="iconkuning1" />
                        <h3 className="text-center"><b>gomassage</b></h3>
                        <p>Easy transaction across Gojek services and merchants.</p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconkuning2.png")} alt="iconkuning2" />
                        <h3 className="text-center"><b>goclean</b></h3>
                        <p>Bayar tagihan listrik, BPJS, gas, air, tv, kabel, internet,
                        beli token listrik. Tanpa antri dan bisa pakai GoPay, bayar
                        tagihan apapun di GoBiils, aja!
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconkuning3.png")} alt="iconkuning3" />
                        <h3 className="text-center"><b>goauto</b></h3>
                        <p>Receive a token for each transaction, swipe them to earn points, and 
                        get amazing rewards.
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconkuning4.png")} alt="iconkuning4" />
                        <h3 className="text-center"><b>goglam</b></h3>
                        <p>Order any Gojek service or from any Gojek partner and pay at the end 
                        of the month with PayLater.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                {/* =========================================1 GRID================================================== */}
                <div className="container" style={{marginTop: '35px'}}>
                <h1><b>News &amp; Entertainment</b></h1>
                <p>Binge on your favourite series, book tickets to the next concert, organise celebrity events, 
                    and do much more. All your treasured digital content belong here.</p>
                <div className="row" style={{marginTop: '35px'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail" style={{padding: '15px'}}>
                        <img className="img-responsive" src={require("./../../images/iconpink1.png")} alt="iconpink1" />
                        <h3 className="text-center"><b>gotix</b></h3>
                        <p>Easy transaction across Gojek services and merchants.</p>
                    </div>
                    </div>
                </div>
                </div>

                <Footer />
                        
            </div>
        )
    }
}
