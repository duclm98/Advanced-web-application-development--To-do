import React from 'react';
import { connect } from 'react-redux';

const TaskItem = (props) => {
    const dispatch = props.dispatch;

    function HandleMarkDone(event) {
        event.preventDefault();
        const id = event.target.value;
        dispatch({
            type: 'MARK_DONE',
            id: +id
        })
    }

    return <div key = {props.task.id}>
        <b>{props.task.name}</b><br></br>
        <b>{props.task.status}</b><br/>
        <button value={props.task.id} onClick={HandleMarkDone}>Mark done</button>
        <hr></hr>
    </div>
}

export default connect()(TaskItem);