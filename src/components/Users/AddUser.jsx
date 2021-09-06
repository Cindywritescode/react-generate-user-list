import {Card} from '../UI/Card';
import {Button} from '../UI/Button';
import {useState} from 'react';
// import classes from './AddUser.module.css';

export const AddUser = ({onAddUser}) => {
    const [enteredUserName, setEnterUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredHobby, setEnteredHobby] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 ||
            enteredAge.trim().length === 0 ||
            enteredCity.trim().length === 0 ||
            enteredHobby.trim().length === 0
        ) {
            console.log('put data on it');
            return;
        }
        if (enteredAge < 1) {
            console.log('cannot have negative number');
            return;
        }
        onAddUser(enteredUserName, enteredAge, enteredCity, enteredHobby);
        setEnterUserName('');
        setEnteredAge('');
        setEnteredCity('');
        setEnteredHobby('');
    };

    const userNameChangeHandler = (event) => {
        setEnterUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const cityChangeHandler = (event) => {
        setEnteredCity(event.target.value);
    };

    const hobbyChangeHandler = (event) => {
        setEnteredHobby(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">User name</label>
                <input
                    id="username"
                    type="text"
                    onChange={userNameChangeHandler}
                    value={enteredUserName}
                />
                <label htmlFor="age">Age(Years)</label>
                <input
                    id="age"
                    type="number"
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />
                <label htmlFor='city'> City</label>
                <input
                    id="city"
                    type="text"
                    onChange={cityChangeHandler}
                    value={enteredCity}
                />
                <label htmlFor='hobby'>Hobby</label>
                <input
                    id="hobby"
                    type="text"
                    onChange={hobbyChangeHandler}
                    value={enteredHobby}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};