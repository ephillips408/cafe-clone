import { fetchUtils } from "react-admin";
import { stringify } from "querystring"

const apiUrl = "http://localhost:3000/api" // May need to add a / at the end.
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    console.log(resource);
    console.log(params);
    const { page, perPage } =  params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };

    const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ json }) => ({ data: json }));
  }
}