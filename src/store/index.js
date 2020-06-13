export const tasks = [{
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
}];

const reducer = (state = tasks, action) => {
    if (action.type === 'ADD_TASK') {
        if (action.payload !== '') {
            const id = state.length + 1;
            const task = {
                id,
                name: action.payload,
                status: 'On-progress'
            }
            state = [...state, task];
            return state;
        }
    } else if (action.type === 'SEARCH_TASK') {
        if (action.payload !== '') {
            const result = state.filter(i => {
                return i.name.toLowerCase().includes(action.payload.toLowerCase());
            });
            return result;
        } else {
            return state;
        }
    } else if (action.type === 'MARK_DONE') {
        const id = action.id;
        for (let i = 0; i < state.length; i++) {
            if (state[i].id === id) {
                state[i].status = 'Done';
                break;
            }
        }
        const result = [...state];
        return result;
    }
    return state;
}

export default reducer;