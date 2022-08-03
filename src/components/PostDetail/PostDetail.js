import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}=useParams()
    const [posts,setPosts]=useState([])
   useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
       .then(res=>res.json())
       .then(data=>setPosts(data))
   },[])
//    navigate use kora hoi button ar jonno 
   const navigate=useNavigate()
   const handleclick =()=>{
    navigate('/home')
   }
    return (
        <div>
            <h3>Title:{posts.title}</h3>
            <p><small>Detail:{posts.body}</small></p>
            <br />
            <button onClick={handleclick}>sell all post</button>
        </div>
    );
};

export default PostDetail;