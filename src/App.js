import {AddUser} from './components/Users/AddUser';
import styled from 'styled-components';
import {UserList} from './components/Users/UserList';
import {useState} from 'react';

const Container = styled.div`
  //color: white;
`;

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (name, age, city, hobby) => {
        const newUser = {id: Math.random().toString(), name, age, city, hobby}
        setUsersList((prevList) => [...prevList, newUser]);
    }

    return (
        <Container>
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={usersList}/>
        </Container>
    );
}

export default App;
