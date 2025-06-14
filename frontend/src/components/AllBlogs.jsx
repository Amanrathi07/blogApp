import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';

function AllBlogs() {

    const [blogs, setBlogs] = useState([])

    async function showBlogs() {
        const res = await fetch("http://localhost:3000/api/v1/blogs");
        const data = await res.json();
        console.log(data.allBlogs);

        setBlogs(data.allBlogs);

    }

    useEffect(() => {
        showBlogs()

    }, [])

    return (
        <>
            <div>
                {blogs.map((blog, i) => (<h3 key={i}>{blog.title}</h3>
                ))}
            </div>
        <Link to="/login"><button>login</button></Link>
        </>
    )
}

export default AllBlogs