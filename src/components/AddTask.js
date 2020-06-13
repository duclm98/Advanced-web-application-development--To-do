import React, {useState} from 'react';
import { connect } from 'react-redux';

const AddTask = ({dispatch}) => {
    const [task, setTask] = useState('');

    function HandleOnTaskChange(event) {
        setTask(event.target.value);
    }

    return <div>
        <form
            onSubmit={e => {
                e.preventDefault()
                dispatch({
                    type: 'ADD_TASK',
                    task
                })
                setTask('');
                document.getElementById('task').value='';
            }}
        >
            <input type='text' name = 'task' id='task' onChange={HandleOnTaskChange}></input>
            <button type="submit">Add task</button>
        </form>
    </div>
}

export default connect()(AddTask);