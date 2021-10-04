import React from 'react';
import './UserItem.css';

const UserItem = props => {
    return (
        <div className="user-item">{props.name} ({props.age} Years old)</div>
    )
};

export default UserItem;