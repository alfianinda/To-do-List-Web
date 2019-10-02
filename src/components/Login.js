import React, { Component } from 'react';
import NavbarLogin from './NavbarLogin';

import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <NavbarLogin />

                <div className="col-sm-4"></div>
                <div className="col-sm-4 box0" style={{marginTop: '100px'}}>
                    <h1>Sign In</h1>
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
                        <Link to="./todolist"><button className="btn btn-default btn-lg butt1"><b>Sign In</b></button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
