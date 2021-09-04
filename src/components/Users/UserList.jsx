import { Card } from '../UI/Card';

const UserList = ({
  users
}) => {
  return (
    <Card>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
              <strong>{user.name.toUpperCase()}</strong> is <strong>{user.age}</strong> years old living in <strong>{user.city}</strong> who likes <strong>{user.hobby}</strong>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export { UserList };