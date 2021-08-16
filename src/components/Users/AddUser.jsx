import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useState } from 'react';
// import classes from './AddUser.module.css';

export const AddUser = () => {
  const [enteredUserName, setEnterUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      console.log('put name on it')
      return;
    }
    if (+enteredAge < 1) {
      console.log('cannot have negative number')
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnterUserName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnterUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};