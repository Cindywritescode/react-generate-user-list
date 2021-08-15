import { AddUser } from './components/Users/AddUser';
import styled from 'styled-components';

const Container = styled.div`
  //color: white;
`

function App() {
  return (
    <Container>
      <AddUser/>
    </Container>
  );
}

export default App;
