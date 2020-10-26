import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "../admin/dataProvider"
// import simpleRestProvider from "ra-data-simple-rest";

// const dataProvider = simpleRestProvider("http://localhost:3000/api");

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
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ListGuesser} />
    </Admin>
  );
};

export default AdminPanel;
