import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  const adminLogin = useSelector((state) => state.adminLogin);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (adminLogin.adminInfo) {
      setToken(adminLogin.adminInfo.token);
    }
  }, []);

  return token === "" ? (
    <div>Please login to view this page.</div>
  ) : (
    <div>Hello</div>
  );
};

export default AdminPanel;
