// src/UserCard.jsx

import React from 'react';
import userData from "../users.json";

function UserCard({ user, showMore, handleShowMore }) {
  return (
    <div className='user-card' key={user.id}>
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <p>First Name: {user.firstName}</p>
      {showMore[user.id] ? (
        <div>
          <p>Last Name: {user.lastName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : null}
      <button onClick={() => handleShowMore(user.id)}>
        {showMore[user.id] ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default UserCard;
