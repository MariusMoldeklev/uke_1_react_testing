// UserCard.jsx
import user from "./data/users.json";

function UserCard({user}) {
  return (
    <div className="user-card" key={user.id}>
      <h3>{user.firstName} </h3>
      <img src={user.image} alt={`Profile Picture of ${user.firstName}`} />
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
