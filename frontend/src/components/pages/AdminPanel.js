import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Still seeing "Cannot read property 'token' of null" when admin not logged in.
// Login redirect is successful.

const AdminPanel = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const [token, setToken] = useState("")

  useEffect(() =>  {
    if (adminLogin.adminInfo) {
      setToken(adminLogin.adminInfo.token)
    } else {
      setToken("")
    }
  }, console.log(token, adminLogin), []); // only for debugging.

  return (
    token === "" ? <div>No credentials</div> : <div>Hello</div>
  );
};

export default AdminPanel;
