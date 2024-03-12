import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersStart } from "./slice/userSlice";
import { Box } from "@mui/material";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.loading);
  console.log(users, "usersusersusers");
  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
 

  const fetchapi = () => {
    dispatch(fetchUsersStart());
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchapi}>api </button>
      <div>
        {users.map((user) => (
          <div>
            <h4 key={user.id}>{user.id}</h4>
            <h4 key={user.id}>{user.cfa_url}</h4>
            <h4 key={user.id}>{user.name}</h4>
            <h4 key={user.id}>description :{user.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
