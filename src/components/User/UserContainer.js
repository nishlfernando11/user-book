import React, {useState} from 'react';
import UserForm from "./UserForm";
import styles from './UserContainer.module.css';
import UserList from "./UserList";

const UserContainer = () => {
    const [users, setUsers] = useState([
        // {name: 'Nish', age: 29, id: Math.random().toString()},
        // {name: 'Iro', age: 29, id: Math.random().toString()},
    ]);

    const handleAddNewUser = newUser => {
        setUsers(prevState => {
            return [...prevState, newUser];
        });
    };

    return (
        <div className={styles['main-container']}>
            <UserForm onSubmitForm={handleAddNewUser}/>
            <UserList users={users}/>
        </div>
    );
};

export default UserContainer;