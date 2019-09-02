import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class TodoItem extends Component {
    render() {
        const listdata = this.props.result.map(todo => {

            // function check (x) {
            //     if (x === 'true') {
            //         return 'Udah Beres';
            //     } else {
            //         return 'Belum Beres';
            //     }
            // }

            // var checked = check (todo.status);
            
            var aidi = todo._id;
            return (
                <tr key={aidi}>
                    <td>{todo.task}</td>
                    <td>{todo.description}</td>
                    <td><Link to={`/todoedit/${todo._id}`}> <i className="fa fa-edit"/> </Link> </td>
                    <td><i className="fa fa-trash" onClick={() => this.props.hapus(todo._id)}/></td>
                </tr>
            )
        })
        return (
                <div className="col-sm-9 box">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {listdata}
                        </tbody>
                    </table>
                </div>

        )
    }
}
