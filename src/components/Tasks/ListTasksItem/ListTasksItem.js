import React, { Component } from 'react'

export default class ListTasksItem extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item">
                    <h2>{this.props.name}</h2>
                    <b>{this.props.status}</b><br/>
                    <button onClick={this.props.handleMarkDone}>Mark done</button>
                </li>
            </div>
        )
    }
}
