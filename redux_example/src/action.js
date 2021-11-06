import {ADD_TASK, DELETE_TASK} from "./types"

export const addTask = (text) => {

    return {
        type: ADD_TASK,
        payload: { title: text }
    }
}

export const deleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
}
