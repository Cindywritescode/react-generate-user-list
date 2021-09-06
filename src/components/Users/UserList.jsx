import { Card } from '../UI/Card';

const UserList = ({
  users
}) => {
  return (
    <Card>
        {users.map((user) => (
          <p key={user.id}>
              <strong>{user.name.toUpperCase()}</strong> is <strong>{user.age}</strong> years old living in <strong>{user.city}</strong> who likes <strong>{user.hobby}</strong>
          </p>
        ))}
    </Card>
  );
};

export { UserList };