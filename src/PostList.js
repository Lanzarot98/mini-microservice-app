import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
    const [posts, setPosts] = useState({});

    const fetchPosts = async ( ) => {
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    };

    useEffect( () => {
        fetchPosts();
    }, []);

    // console.log(posts);
    const renderedPosts = Object.values(posts).map( posts => {
        return (
            <div 
                className="card" 
                style={{ width: '30%', marginBottom: '20px' }}
                key={posts.id}
            >
                <div className="card-body">
                    <h3>{posts.title}</h3>
                </div>
            </div>
        );
    } );

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        { renderedPosts }
    </div>
};

