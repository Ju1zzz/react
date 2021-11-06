import {ADD_TASK, DELETE_TASK} from "./types"

export const reducer = (store, action) => {

    switch (action.type) {
        case ADD_TASK:
            return {
             ...store,
             tasks:[ ...store.tasks, action.payload]
            }
            
        case DELETE_TASK:
            return{
                ...store,
                tasks: store.tasks.filter((_, ind) => ind !== action.payload)
            }

        default:
            return store;
    }
}