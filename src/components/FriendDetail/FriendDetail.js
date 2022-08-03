import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} =useParams()
    console.log(friendId)
    const[user,setUser]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/friends')
    }
    return (
        <div>
            <h2>friend number:{user.id}</h2>
            <h3>Name:{user.name}</h3>
            <h5>call :{user.phone}</h5>
            {/* ? sign use kora hoice karon object ar vitor object read korte gase tai ata chaining kora hoise */}
            <p><small>Works at:{user.company?.name}</small></p>
            <br />
            <button onClick={handleClick}>
                see all friend
            </button>
        </div>
    );
};

export default FriendDetail;