/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

const TasksList = ({visibleTasks}) => {
    const data = [...visibleTasks];
    return (
        data.map(i => {
            return <TaskItem key = {i.id} taskItem = {i}></TaskItem>
        })
    )
}

const mapStateToProps = state => {
    return {
        visibleTasks: state.visibleTasks
    }
}

export default connect(mapStateToProps)(TasksList);