// UserCard.jsx
import {user} from "./data/users.json";

function UserCard() {
  return (
    <div className="user-card">
      <h3>{user.firstName} </h3>
      {user.image}
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
