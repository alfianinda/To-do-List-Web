import React, { Component } from 'react';
import axios from 'axios';

import TodoNavbar from "./TodoNavbar";
import TodoForm from "./TodoForm";


export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: [],
            task: "",
            desc: ""
        }
    }
    
    async componentDidMount() {
        const listdata = await axios ({
            method: "get",
            url: "https://gatim8.herokuapp.com/api/tasks",
            headers: {
                "Content-Type": "application/json"
            }
        });
        this.setState({
            result: listdata.data
        });
    }
    

    berubah = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    tambahData = async e => {
        const res = await axios ({
            method: "post",
            url: "https://gatim8.herokuapp.com/api/tasks",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                task: this.state.task,
                description: this.state.desc
            }
        })
        this.setState({
            result: [...this.state.result, res.data]
        })
        this.setState({
            task: "",
            desc: ""
        })
    };

    hapus = async id => {
        await axios ({
            method: "delete",
            url: `https://gatim8.herokuapp.com/api/tasks/${id}`,
            headers: {
                "Content-Type": "application/json"
            }
        })
        this.setState({
            result: this.state.result.filter(todo => todo._id !== id)
        })
    }

    render() {
        // console.log(this.state.result)
        return (
            <div>
                <TodoNavbar />
                <TodoForm
                desc={this.state.desc}
                task = {this.state.task}
                result={this.state.result}
                change={this.berubah}
                tambah= {this.tambahData}
                hapus= {this.hapus}
                />
            </div>
        )
    }
}
