import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = (props) => {
    const {title,userId,id}=props.post
    const navigate= useNavigate()
    const handleCliCkButon=()=>{
        navigate(`/post/${id}`)
    }
    const style={
        border:'5px solid goldenrod',
        padding:'10px',
        margin:'10px',
        borderRadius:'5px'
    }
    return (
        
        <div style={style}>
            <h3>{title}</h3>
            <p><small>{userId}</small></p>
            <Link to={`/post/${id}`}>visit</Link>
            <br />
            <button onClick={handleCliCkButon}>visit</button>

        </div>
    );
};

export default Post;