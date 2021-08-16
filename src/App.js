import { AddUser } from './components/Users/AddUser';
import styled from 'styled-components';
import { UserList } from './components/Users/UserList';

const Container = styled.div`
  //color: white;
`

function App() {
  return (
    <Container>
      <AddUser/>
      <UserList/>
    </Container>
  );
}

export default App;
