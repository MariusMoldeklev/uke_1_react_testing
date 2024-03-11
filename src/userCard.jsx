// UserCard.jsx
import {user} from users.json;

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.firstName} </h3>
      {user.image}
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
