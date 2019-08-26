import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer style={{padding: '15px 60px 15px 60px', backgroundColor: 'rgb(34, 28, 28)', color: 'white'}}>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                        <img src={require("./../Assets/images/logo2.png")} alt="logo2" className="img-responsive" />
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">About Gojek</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">Media Centre</Link>
                            </li>
                            <li>
                            <Link to="#!">About Us</Link>
                            </li>
                            <li>
                            <Link to="#!">Blog</Link>
                            </li>
                            <li>
                            <Link to="#!">Careers</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Support</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">Contact Us</Link>
                            </li>
                            <li>
                            <Link to="#!">Privacy Policy</Link>
                            </li>
                            <li>
                            <Link to="#!">Terms &amp; Conditions</Link>
                            </li>
                            <li>
                            <Link to="#!">Help Centre</Link>
                            </li>
                        </ul>
                        </div>  
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Follow Us On</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">Facebook</Link>
                            </li>
                            <li>
                            <Link to="#!">Twitter</Link>
                            </li>
                            <li>
                            <Link to="#!">Instagram</Link>
                            </li>
                            <li>
                            <Link to="#!">Youtube</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Download</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!"><img className="img-responsive logo" src={require("./../Assets/images/logo0.png")} alt="logo0" /></Link>
                            </li>
                            <li>
                            <Link to="#!"><img className="img-responsive logo" src={require("./../Assets/images/logo0.png")} alt="logo0" /></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    {/* ----------------------------------------------------------- */}
                    <div className="row" style={{marginTop: '30px'}}>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Transport &amp; Logistics</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">GoRide</Link>
                            </li>
                            <li>
                            <Link to="#!">GoCar</Link>
                            </li>
                            <li>
                            <Link to="#!">GoSend</Link>
                            </li>
                            <li>
                            <Link to="#!">GoBox</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Food &amp; FMCG</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">GoFood</Link>
                            </li>
                            <li>
                            <Link to="#!">GoFood Festival</Link>
                            </li>
                            <li>
                            <Link to="#!">GoMed</Link>
                            </li>
                        </ul>
                        </div>  
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Payments</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">GoPay</Link>
                            </li>
                            <li>
                            <Link to="#!">GoBills</Link>
                            </li>
                            <li>
                            <Link to="#!">GoPoint</Link>
                            </li>
                            <li>
                            <Link to="#!">PayLater</Link>
                            </li>
                            <li>
                            <Link to="#!">GoPulsa</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">Daily Needs</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">GoMassage</Link>
                            </li>
                            <li>
                            <Link to="#!">GoClean</Link>
                            </li>
                            <li>
                            <Link to="#!">GoAuto</Link>
                            </li>
                            <li>
                            <Link to="#!">GoGlam</Link>
                            </li>
                            <li>
                            <Link to="#!">GoLaundry</Link>
                            </li>
                            <li>
                            <Link to="#!">GoDaily</Link>
                            </li>
                            <li>
                            <Link to="#!">GoFix</Link>
                            </li>
                        </ul>
                        </div>
                        <div className="col-sm-2">
                        <h5 className="text-uppercase">News &amp; Entertainment</h5>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="#!">GoTix</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row">
                        <hr />
                    </div>
                    </div>
                    <div className="footer-copyright text-center">©2019 Gojek</div>
                    <div className="footer-copyright text-center">
                    Gojek is a trademark of PT Aplikasi Karya Anak Bangsa. Registred in the Directorate
                    in the General of Intellectual Property of the Republic of Indonesia.
                    </div>
                </footer>
            </div>
        )
    }
}
