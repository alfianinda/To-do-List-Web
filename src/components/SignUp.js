import React, { Component } from 'react';
import NavbarSignup from './NavbarSignup';
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <NavbarSignup />
                <div className="col-sm-4"></div>
                <div className="col-sm-4 box0" style={{marginTop: '100px'}}>
                    <h1>Sign Up</h1>
                    <form style={{marginTop: '50px'}}>         
                        <label>Email</label>
                        <input type="email" 
                        className="form-control" 
                        placeholder="Add Task Here"
                        />
                        <br></br>

                        <label>Password</label>
                        <input type="password" 
                        className="form-control" 
                        placeholder="Add Task Here"
                        />
                        <br></br>
                    </form>
                    <div>
                    <Link to="./"><button className="btn btn-default btn-lg butt1"><b>Sign Up</b></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
