import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div>
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-8">
                    <h1><b>Welcoming a fresh start </b></h1>
                    <p>Meet Solv, Gojek’s new logo</p>
                    <p>
                        Founded on the principle of solving everyday challenges with technology, 
                        the Gojek app has evolved from offering just ride-hailing to a suite of more than 20 services today. 
                        As we continue to grow as a leading tech company serving everyday solutions for millions of users across Southeast Asia, 
                        our passion for problem-solving grows.
                    </p>
                    <p>
                        This journey builds on our ever-present dedication to creating seamless experiences for users, 
                        and providing the socio-economy impact for millions of our partners (drivers, merchants, service providers).
                    </p>
                    <p>
                        Our new logo symbolizes Gojek’s transformation from being a ride-hailing service to becoming the largest Super App 
                        with three platforms: consumer, driver, and merchant applications, with a variety of smart ways to eliminate hassles.
                    </p>
                    <p>
                        We believe that with Gojek, and with continuous technological innovations, 
                        There Is Always A Way to solve everyday problems and affect positive social impact. 
                    </p>
                    </div>
                    <div className="col-sm-4">
                    <Link to="#">
                        <img className="img-responsive imgisi" src={require("./../../Assets/images/isi2.jpg")} alt="isi2" />     
                    </Link>
                    </div>
                </div>
                </div> 
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-4">
                    <Link to="#">
                        <img className="img-responsive imgisi2" src={require("./../../Assets/images/isi3.jpg")} alt="isi3" />     
                    </Link>
                    </div>
                    <div className="col-sm-8">
                    <h1><b>History</b></h1>
                    <p>
                        Gojek’s journey began in 2010 as a motorcycle ride-hailing call center in Indonesia. 
                        The homegrown app was then launched in 2015 with only three services: GoRide, GoSend, and GoMart.
                    </p>
                    <p>Since then, the app has evolved into a Super App, a multi-services platform with more than 20 services today.</p>
                    <p>Gojek is now a leading technology group of platform serving millions of users in Southeast Asia. </p>
                    </div>
                </div>
                </div> 
                {/* =========================================3 GRIDS================================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <h1 className="text-center"><b>The 3 Gojek Pillars</b></h1>
                <div className="row">
                    <div className="col-sm-4">
                    <div className="thumbnail" style={{borderColor: 'transparent'}}>
                        <img className="img-responsive" src={require("./../../Assets/images/icon21.png")} alt="icon21" />
                        <h3 className="text-center"><b>Speed</b></h3>
                        <p className="text-center">Our service is fast, and we continually learn and grow from experience. </p>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="thumbnail" style={{borderColor: 'transparent'}}>
                        <img className="img-responsive" src={require("./../../Assets/images/icon22.png")} alt="icon22" />
                        <h3 className="text-center"><b>Innovation</b></h3>
                        <p className="text-center">We work hard to continuously improve our services, 
                        so that they provide more ease for users.</p>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="thumbnail" style={{borderColor: 'transparent'}}>
                        <img className="img-responsive" src={require("./../../Assets/images/icon23.png")} alt="icon23" />
                        <h3 className="text-center"><b>Social Impact</b></h3>
                        <p className="text-center">We work to create as much positive social impact as possible for Gojek users.</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../Assets/images/isi4.jpg")} alt="isi4" />     
                    </Link>
                    </div>
                    <div className="col-sm-6" style={{padding: '70px'}}>
                    <h1><b>Services</b></h1>
                    <p>
                        Through just one platform, Gojek’s users can access over 20 services ranging from transportation 
                        to food delivery, massages, e-money, and even a loyalty program. Because with Gojek, There Is Always A Way. 
                    </p>
                    </div> 
                </div>
                </div> 
                {/* =============================2 GRIDS======================================= */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <div className="col-sm-6" style={{paddingRight: '70px'}}>
                    <h1><b>Social Economy Impact</b></h1>
                    <p>
                        Research by the Demographic Institute of the Faculty of Economics &amp; Business, 
                        University of Indonesia, in 2018, involving 6,732 respondents, conducted across 9 cities in Indonesia.  
                    </p>
                    <p>
                        Delivering Economic Impact For Indonesia
                        <br />
                        Gojek contributed around Rp44.2 trillion (US$3 billion) to the Indonesian economy as of end 2018*.
                    </p>
                    <p>
                        Our Impact Helps The Members In Our Ecosystem
                        Driver-partners
                        <br />
                        After joining Gojek, the quality of life of our driver-partners’ have increased—100% 
                        of them believe that they can provide better well-being for their family. 
                        Most also claim they can now send their children to school, 
                        especially with the fair incentives and policies that Gojek provides.
                    </p>
                    <p>
                        Merchants
                        <br />
                        Gojek’s ecosystem supports the growth of MSMEs in Indonesia. 93% of MSME partners experience 
                        an increase in transaction volume and 55% of them experience an increase in earnings.
                    </p>
                    <p>
                        Service providers
                        <br />
                        GoLife partners with more than 60,000 service providers, 70% of which are female;
                        and 90%s are high school graduates. Approximately 1 in 20 of our GoLife service 
                        providers in GoMassage and GoAuto are persons with disabilities.
                    </p> 
                    </div> 
                    <div className="col-sm-6">
                    <Link to="#">
                        <img className="img-responsive img" src={require("./../../Assets/images/isi5.jpg")} alt="isi5" />     
                    </Link>
                    </div>
                </div>
                </div> 
                {/* =======================================SLIDER============================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <h1 className="text-center"><b>Awards </b></h1>
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
                        <img src={require("./../../Assets/images/slider2.jpeg")} alt="slidera" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../Assets/images/slider2.jpeg")} alt="sliderb" style={{width: '100%'}} />
                    </div>
                    <div className="item">
                        <img src={require("./../../Assets/images/slider2.jpeg")} alt="sliderc" style={{width: '100%'}} />
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
                {/* =========================================================================================== */}
                <div className="container" style={{marginTop: '85px'}}>
                <div className="row">
                    <h1 className="text-center" style={{marginBottom: '85px'}}><b>Official Channels</b></h1>
                    <div className="col-sm-4">
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link> 
                        </li>
                        <li>
                        <Link to="#!">gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">Gojek Indonesia</Link>
                        </li></ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    </div>
                    {/* ----------------------------------- */}
                    <div className="col-sm-4">
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    </div>
                    {/* ---------------------------- */}
                    <div className="col-sm-4">
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul> 
                    <hr />
                    <h5 className="text-uppercase">Gojek Indonesia</h5>
                    <ul className="list-unstyled ull">
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                        <li>
                        <Link to="#!">@gojekindonesia</Link>
                        </li>
                    </ul>  
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
