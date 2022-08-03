import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, email } = props.friend
    const friendStyle = {
        border: '5px solid goldenrod',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px'
    }
    const navigate=useNavigate()
    const url = `/friend/${id}`
    const handleFriendClick=()=>{
        navigate(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h4>I am {name} {id}</h4>
            <h6> call me:{phone}</h6>
            <p><small>Email:{email}</small></p>
            <Link to={url} >vist me</Link>
            <br />
            <Link to={url}>
                    <button> visti</button>
            </Link>
            <br />
            {/* onclick use korle useNavigate function use korte hobe */}
            <button onClick={handleFriendClick} >visit 2</button>
        </div>
    );
};

export default Friend;