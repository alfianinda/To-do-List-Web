import React, { Component } from 'react'

export default class TodoButton extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-default btn-lg butt" onClick={this.props.tambah}><b>+</b></button>
            </div>
        )
    }
}
