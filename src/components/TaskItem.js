import React, {useState} from 'react';
import { connect } from 'react-redux';

const TaskItem = ({ dispatch, taskItem, newTask }) => {
    const [task, setTask] = useState(taskItem);
    if (newTask) {
        task = newTask;
    }

    function HandleMarkDone(event) {
        event.preventDefault();
        const id = event.target.value;
        document.getElementById(id).innerHTML='Done';
        dispatch({
            type: 'MARK_DONE',
            id: +id
        })
    }

    return <div key = {task.id}>
        <b>{task.name}</b><br></br>
        <b id={task.id}>{task.status}</b><br/>
        <button value={task.id} onClick={HandleMarkDone}>Mark done</button>
        <hr></hr>
    </div>
}

const mapStateToProps = state => {
    return {
        newTask: state.newTask
    }
}

export default connect()(TaskItem);