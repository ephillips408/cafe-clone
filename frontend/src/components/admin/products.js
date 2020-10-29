import React from "react";
import {
  List,
  Edit,
  Datagrid,
  SimpleForm,
  ReferenceField,
  TextField,
  NumberField,
  EditButton,
  TextInput,
  NumberInput,
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
