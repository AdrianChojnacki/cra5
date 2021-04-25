import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <li key={user.login.uuid}>
      <h4>
        {`${user.name.title} ${user.name.first} ${user.name.last}`}{" "}
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </h4>
    </li>
  ));

  return <ul>{users}</ul>;
};

export default UsersList;
