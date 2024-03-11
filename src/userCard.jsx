// UserCard.jsx
import {user} from "./data/users.json";

function UserCard() {
  return (
    <div className="user-card">
      <h3>{user.users[0].firstName} </h3>
      {user.users[0].image}
      <p>Email: {user.users[0].email}</p>
    </div>
  );
}

export default UserCard;
