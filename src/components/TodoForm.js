import React from 'react';
import {Link} from "react-router-dom";

import TodoButton from "./TodoButton";
import TodoItem from "./TodoItem";


const TodoForm = props => {
    const {task, desc, change, tambah, result, hapus} = props;
        return (
            <div>
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
                            <form>         
                                <label>Task:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Task..."
                                name="task"
                                value={task}
                                onChange={change}
                                />
                                <br></br>

                                <label>Description:</label>
                                <input type="text" 
                                className="form-control" 
                                placeholder="Description..."
                                name="desc"
                                value={desc}
                                onChange={change}
                                />
                                <br></br>
                            </form>
                        </div>
                        <div className="col-sm-9">
                            <TodoButton tambah={tambah} />
                        </div>
                        </div>
                        <TodoItem result={result} hapus={hapus}/>
                    </div>
                    </div>
                </div>
            </div>
    );
};


export default TodoForm;

