// UserCard.jsx
import user from "./data/users.json";

function UserCard() {
  return (
    <div className="user-card">
      <h3>{user.users[0].firstName} </h3>
      <img src={user.users[0].image} alt="Profile Picture" />
      <p>Email: {user.users[0].email}</p>
    </div>
  );
}

export default UserCard;
