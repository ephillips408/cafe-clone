import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Admin, Resource, EditGuesser } from "react-admin";
import dataProvider from "../admin/dataProvider"
import { ProductEdit, ProductList } from "../admin/products";

// const dataProvider = restProvider("http://localhost:3000/api");

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
      <Resource name="products" list={ProductList} edit={ProductEdit} />
    </Admin>
  );
};

export default AdminPanel;
