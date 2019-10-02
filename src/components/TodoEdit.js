import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import TodoNavbar from "./TodoNavbar";
 
class TodoEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resultUpdate: [],
            task: "",
            description: ""
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        try {
          const i = this.props.match.params.id;
          const body = {
            task: this.state.task,
            description: this.state.description
          };
          await axios.put(`https://gatim8.herokuapp.com/api/tasks/${i}`, body);
          this.props.history.push("/todolist");
        } catch (error) {
          console.log(error.response.data);
        }
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
    
        const listdata = await axios.get(
          `https://gatim8.herokuapp.com/api/tasks/${id}`
        );
        this.setState({
          task: listdata.data.task,
          description: listdata.data.description
        });
    }
    
  render() {
    return (
        <div>
            <TodoNavbar />
            <div className="container" style={{marginTop: '100px'}}>
                    <div className="row content">
                    <div className="col-sm-3 box0">
                        <ul className="nav nav-pills nav-stacked tulis-hitam">
                        <li>
                            <img src={require('./../Assets/foto.jpg')} className="foto-image" alt="profile" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="tulis-profil">Alfianinda</span>
                        </li>
                        <br />
                        <br />
                        </ul>
                        <ul className="nav nav-pills nav-stacked tulis-hitam" style={{marginLeft: '55px'}}>
                        <li><Link to="#">My Day</Link></li>
                        <li><Link to="#">Important</Link></li>
                        <li><Link to="#">Planned</Link></li>
                        <li><Link to="#">Todo</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <div className="col-sm-9 box">
                        <div className="col-sm-9">
                            <form onSubmit={this.handleSubmit}>         
                                <legend>Edit Data</legend>
                                
                                <label>Edit Task:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Task..."
                                name="task"
                                value={this.state.task}
                                onChange={this.handleChange}
                                />
                                <br></br>

                                <label>Edit Description:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Description..."
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />
                                <br></br>

                                <div className="col-sm-9">
                                    <button className="btn btn-default btn-lg butt"><b>Edit</b></button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
  }
}

export default TodoEdit;

