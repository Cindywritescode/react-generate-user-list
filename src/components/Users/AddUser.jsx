import { Card } from '../UI/Card';
// import classes from './AddUser.module.css';

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input id="username" type="text"/>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number"/>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};