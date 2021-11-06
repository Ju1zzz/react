import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddPost = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', author: '' });

    const onSubmitHandler = async (event) => {

        event.preventDefault();
        try {
            const response = await fetch('/posts', 
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data) navigate('/blog');
        } catch (err) {
            console.log("err = ", err);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>
                    Title of the article
                    <input type="text" value={formData.title} onChange={(event) => { setFormData({ ...formData, title: event.target.value }) }} />
                </label>
                <label>
                    Author
                    <input type="text" onChange={(event) => { setFormData({ ...formData, author: event.target.value }) }} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
