import React from "react";
import {
  Edit,
  List,
  Create,
  Datagrid,
  SimpleForm,
  TextField,
  NumberField,
  EditButton,
  TextInput,
  NumberInput,
  DeleteButton,
  useRedirect,
  useRefresh,
} from "react-admin";

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      {/* <ReferenceField source="id" reference="s">
        <TextField source="id" />
      </ReferenceField> */}
      <TextField source="name" />
      <NumberField source="price" />
      <TextField source="description" />
      <TextField source="id" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <ReferenceInput source="_id" reference="s">
        <SelectInput optionText="id" />
      </ReferenceInput> */}
      <TextInput source="name" />
      <NumberInput source="price" />
      <TextInput source="image" />
      <TextInput source="description" />
    </SimpleForm>
  </Edit>
);

export const ProductCreate = (props) => {
  const redirect = useRedirect();
  const refresh = useRefresh();

  const onSuccess = () => {
    redirect("/");
    refresh();
  }

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="price" />
        <TextInput source="image" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};
