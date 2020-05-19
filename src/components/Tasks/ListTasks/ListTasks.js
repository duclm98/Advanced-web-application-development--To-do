/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import ListTasksItem from '../ListTasksItem/ListTasksItem';

export default class ListTasks extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [{
                id: 1,
                name: "Bài tập tuần 1",
                status: "On-progress"
            }, {
                id: 2,
                name: "Bài tập tuần 2",
                status: "On-progress"
            }, {
                id: 3,
                name: "Bài tập tuần 3",
                status: "On-progress"
            }, {
                id: 4,
                name: "Bài tập tuần 4",
                status: "On-progress"
            }, {
                id: 5,
                name: "Bài tập tuần 5",
                status: "On-progress"
            }, {
                id: 6,
                name: "Bài tập tuần 6",
                status: "On-progress"
            }, {
                id: 7,
                name: "Bài tập tuần 7",
                status: "On-progress"
            }, {
                id: 8,
                name: "Bài tập tuần 8",
                status: "On-progress"
            }, {
                id: 9,
                name: "Bài tập tuần 9",
                status: "On-progress"
            }, {
                id: 10,
                name: "Bài tập tuần 10",
                status: "On-progress"
            }],
            searchData: [],
            isSearch: false,
        }
    }

    handleAddTask = () => {
        const tasks = this.state.tasks;
        const IDs = tasks.map(i => i.id);
        const maxID = Math.max(...IDs);
        const nextID = maxID + 1;
        this.setState(prevState => ({
            tasks: [...prevState.tasks, {
                id: nextID,
                name: this.refs.taskName.value,
                status: "On-progress"
            }]
        }));
    }

    handleSearch = ()=>{
        const searchText = this.refs.searchText.value;
        if (searchText === '') {
            this.setState({
                isSearch: false
            })
        }
        const tasks = this.state.tasks;
        let searchData = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].name.includes(searchText)) {
                searchData.push(tasks[i]);
            }
        }
        this.setState({
            searchData: searchData,
            isSearch: true
        })
    }

    handleMarkDone = (id) => {
        const tasks = this.state.tasks;
        let index = -1;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].status = "Done";
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.setState({
                tasks: tasks
            })
        }
    }

    render() {
        let data = this.state.tasks;
        if (this.state.isSearch === true) {
            data = this.state.searchData;
        }
        const elements = data.map((item) => {
            return <ListTasksItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        status={item.status}
                        handleMarkDone={()=>{this.handleMarkDone(item.id)}}
                    />
        });

        return (
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item active">
                        <h1>Danh sách task</h1>
                    </li>
                    <li className="list-group-item"></li>
                    <form>
                        <div className="form-group">
                            <input type="text" ref="taskName" className="form-control" placeholder="Nhập tên task"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" onClick={this.handleAddTask}>Thêm task</button>
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <input type="text" ref="searchText" className="form-control" placeholder="Nhập từ khoá"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSearch}>Tìm kiếm</button>
                        </div>
                    </form>
                    {elements}
                </ul>
            </div>
        )
    }
}