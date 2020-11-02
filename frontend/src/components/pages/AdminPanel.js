import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Admin, Resource } from "react-admin";
import dataProvider from "../admin/dataProvider";
import { ProductCreate, ProductEdit, ProductList } from "../admin/products";

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
      <Resource
        name="products"
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
      />
    </Admin>
  );
};

export default AdminPanel;
