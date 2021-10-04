import React from 'react';
import './UserList.css';
import UserItem from './UserItem';
import Card from '../UI/Card';

const UserList = props => {
    return (
        <Card className="user-list">
            <ul>
                {props.users.map(user => <UserItem name={user.name} age={user.age} key={user.id}/>)}
            </ul>
        </Card>
    );
};

export default UserList;