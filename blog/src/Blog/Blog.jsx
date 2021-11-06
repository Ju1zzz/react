import React, { useEffect, useState } from 'react'

export const Blog = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/posts")
            const data = await response.json()
            console.log("🚀 ~ file: Blog.jsx ~ line 9 ~ useEffect ~ posts", data)
            if (data && Array.isArray(data)) setPosts(data);
        }
        catch (err) {
            console.log('err = ', err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const deletePost = async (id) => {
        try {
            const response = await fetch('/posts/' + id,
                {
                    method: 'DELETE'
                });
            const data = await response.json();
            if(data) fetchData();
        } catch (err) {
            console.log("err = ", err);
        }
    }

    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post) => {
                return <div key={post.id}>
                    <h4>№{post.id} - {post.title}, {post.author}<button onClick={() => { deletePost(post.id) }}>Delete</button></h4>
                </div>
            })}
        </div>
    )
}

