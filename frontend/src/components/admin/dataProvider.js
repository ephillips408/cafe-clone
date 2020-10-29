import { fetchUtils } from "react-admin";
import { stringify } from "querystring";

const apiUrl = "http://localhost:3000/api";
const httpClient = fetchUtils.fetchJson;

// Helper to remove _ from _id
const renameKey = (object, key, newKey) => {
  const clone = (obj) => Object.assign({}, obj);
  const clonedObj = clone(object);
  const targetKey = clonedObj[key];

  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map(resource => ({ ...resource, id: resource._id})),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },
};
