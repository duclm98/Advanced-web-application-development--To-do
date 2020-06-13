export const initialState = {
    tasks: [{
        id: 1,
        name: "React",
        status: "On-progress"
    }, {
        id: 2,
        name: "Vue",
        status: "On-progress"
    }, {
        id: 3,
        name: "Nodejs",
        status: "On-progress"
    }],
    visibleTasks: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_TASK') {
        if (action.task !== '') {
            const id = state.visibleTasks.length + 1;
            const task = {
                id,
                name: action.task,
                status: 'On-progress'
            }
            return {
                tasks: [...state.visibleTasks, task],
                visibleTasks: [...state.visibleTasks, task]
            }
        }
    } else if (action.type === 'SEARCH_TASK') {
        const search = action.search;
        let visibleTasks;
        if (search !== '') {
            visibleTasks = state.tasks.filter(i => {
                return i.name.toLowerCase().includes(search.toLowerCase());
            });
        } else {
            visibleTasks = state.tasks;
        }
        return {
            tasks: state.visibleTasks,
            visibleTasks: [...visibleTasks]
        };
    } else if (action.type === 'MARK_DONE') {
        const id = action.id;
        let newTask;
        const visibleTasks = state.visibleTasks.map(i => {
            if (id === i.id) {
                i.status = 'Done';
                newTask = i;
            }
            return i;
        })
        return {
            tasks: state.tasks,
            visibleTasks: [...visibleTasks],
            newTask
        };
    }
    return {
        tasks: state.tasks,
        visibleTasks: [...state.tasks]
    };
}

export default reducer;