/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

const TasksList = ({tasks}) => {
    return (
        tasks.map(i=>{
            return <TaskItem key = {i.id} task = {i}></TaskItem>
        })
    )
}

const mapStateToProps = state => {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps)(TasksList);