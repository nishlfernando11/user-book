import React, {useState} from 'react';
import './UserForm.css';
import Error from "../Error/Error";
import Card from '../UI/Card';
import Button from '../UI/Button';

const UserForm = props => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserName = event => {
        setErrorMessage('');
        setUserName(event.target.value);
    };

    const handleUserAge = event => {
        setErrorMessage('');
        setUserAge(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setErrorMessage('Age or Name cannot be empty');
            return;
        }
        if (+userAge <= 0) {
            setErrorMessage('Age is Invalid.');
            return;
        }
        props.onSubmitForm({
            name: userName,
            age: userAge,
            id: Math.random().toString()
        });
        setUserName('');
        setUserAge('');
    };

    const hideErrorMessage = () => {
        setErrorMessage('');
    };

    return (
        <div>
            {errorMessage &&
            <Error className={`error ${errorMessage ? 'show' : 'hide'}`} error={errorMessage}
                   hideError={hideErrorMessage}/>
            }
            <Card className="user-form">
                <form onSubmit={handleSubmit}>
                    <div className="user-form__section">
                        <label>Username</label>
                        <input type="text" className="user-form__input" value={userName} onChange={handleUserName}/>
                    </div>
                    <div className="user-form__section">
                        <label>Age(Years)</label>
                        <input type="number" className="user-form__input" value={userAge} onChange={handleUserAge}/>
                    </div>
                    <Button className="user-form-button" type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default UserForm;