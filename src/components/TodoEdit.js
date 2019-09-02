import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import TodoNavbar from "./TodoNavbar";
 
class TodoEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resultUpdate: [],
            taskUpdate: "",
            descUpdate: ""
        }
    }
     
    //fungsi menampilkan data per id
    componentDidMount(){
        var id =this.props.location.state.aidi;
        console.log(id)
        axios.get(`https://gatim8.herokuapp.com/api/tasks/${id}`)
        // .then adalah untuk bersiap menerima respon dari server backend di atas
        .then((hasilAmbil)=>{
            console.log(hasilAmbil);
            console.log(hasilAmbil.data.task)
            console.log(hasilAmbil.data.description)
            this.setState({
                taskUpdate: hasilAmbil.data.task,
                descUpdate: hasilAmbil.data.description,
                
            })
        });
    }

    //fungsi perubahan bagian input data 
    value = (e) =>{
    this.setState({
        taskUpdate: e.taskref.value,
        descUpdate: e.descref.value
        }) 
    }

    //supaya tidak terjadi pengulangan submit 2x (prevent default)
    updateData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('task', this.state.taskUpdate);
        formData.append('description', this.state.descUpdate);
        axios.post('https://gatim8.herokuapp.com/api/tasks/', formData);
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
                            <form onSubmit={this.updateData}>         
                                <legend>Edit Data</legend>
                                
                                <label>Edit Task:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Task..."
                                ref="taskref"
                                Value={this.state.taskUpdate}
                                />
                                <br></br>

                                <label>Edit Description:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Description..."
                                ref="descref"
                                Value={this.state.descUpdate}
                                />
                                <br></br>
                            </form>
                        </div>
                        <div className="col-sm-9">
                            {/* <button className="btn btn-default btn-lg butt" type="submit" onClick={this.updateData}><b>Edit</b></button> */}
                            <button className="btn btn-default btn-lg butt" type="submit" onClick={() => this.value(this.refs)}><b>Edit</b></button>
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

