import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
    const [content, setContent] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault(event);

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });

        setContent('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="mb-2">New Comment</label>
                    <input 
                        value={content} 
                        onChange={e => setContent(e.target.value)} 
                        className="form-control">
                    </input>
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};


