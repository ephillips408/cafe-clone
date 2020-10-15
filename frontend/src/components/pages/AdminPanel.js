import React from "react";
import { useSelector } from "react-redux";

// Still seeing "Cannot read property 'token' of null" when admin not logged in.
// Login redirect is successful.

const AdminPanel = () => {
  const adminCreds = useSelector((state) => state.adminLogin);

  return (
    <div>
      {
        adminCreds.adminInfo.token ? (
          <div>Hello</div>
        ) : (
          <div>Please login to view this page.</div>
        )
      }
    </div>
  )
};

export default AdminPanel;