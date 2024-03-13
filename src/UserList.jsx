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
    <div style={{ overflow:'auto' , width:'99%' , color:'white' , margin:'auto'}}>
      <h1>Cat Breeds List</h1>
      <button onClick={fetchapi}>api </button>
      <div style={{  overflow:'auto' , display:'flex' , flexWrap:'wrap' , gap:'3px', width:'99%' , color:'white' , margin:'auto' }}>
        {users.map((user) => (
          <div style={{   width:'450px' ,border:'1px solid white' ,padding:'14px' }}>
            <h4 key={user.id}>ID : {user.id}</h4>
            <h4  style={{   width:'200px' , }} key={user.id}> {user.cfa_url}</h4>
            <h4 key={user.id}>NAME : {user.name}</h4>
            <h4 key={user.id}>description : {user.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
