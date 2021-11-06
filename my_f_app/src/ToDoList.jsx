import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import cn from 'classnames'
import './ToDoList.css'


const ToDoList = () => {
    const [inputText, setInputText] = useState("Enter a task...");
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        try {
            const tasksFromStorage = localStorage.getItem('tasks') || [];
            const parsedTasks = JSON.parse(tasksFromStorage);
            setTasks(parsedTasks);
        } catch (err) {
            setTasks([])
        }

    }, [])
        ;
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log('tasks udated')
    }, [tasks]);

    const addTask = () => {
        if (inputText.trim() === '') return alert('Empty string cannot be added');
        if (tasks.some((el) => el.title.toLowerCase() === inputText.toLowerCase())) return alert('Such task already exists');
        const tasksCopy = [...tasks];
        tasksCopy.push({ id: uuid(), title: inputText, isDone: false });
        setTasks(tasksCopy);
        setInputText('Enter a task...');
    }

    const deleteTask = (id) => {
        console.log('delete clicked')
        const filtrTasks = tasks.filter((el) => el.id != id)
        if (filtrTasks.length === 0) localStorage.removeItem('tasks')
        setTasks(filtrTasks)
    }
    const complete = (id) => {
        const changedTasks = tasks.map((el) => {
            if (el.id === id) {
                return { ...el, isDone: !el.isDone }
            }
            return el;
        })
        setTasks(changedTasks);
    }
    return (
        <div className="todo-wrapper">
            <form onSubmit={(event) => {
                event.preventDefault()
                addTask();
            }}>
                <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} />
                <button type="submit">Add task</button>
            </form>
            <ul className="list">
                {tasks.map((el) => {
                   // return <li key={el.id} className={`task ${el.isDone ? 'task-done' : ''}`}>
                   return  <li key={el.id} className={cn('task', {'task-done': el.isDone})}>
                        <div className="title">{el.title}</div>
                        <button className="dbtn" onClick={() => deleteTask(el.id)}>Delete</button>
                        <button className="dbtn" onClick={() => complete(el.id)}>{el.isDone ? 'Back' : 'Complete'}</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList
{/*{ id: uuid(), title: 'Buy bread', isDone: false },
        { id: uuid(), title: 'Celebrate', isDone: true },
        { id: uuid(), title: 'Create site', isDone: false } */}