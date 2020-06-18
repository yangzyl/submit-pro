import createApiHandler from "./create-api-handler";
import createApiInstance from "./create-api-instance";

const server_config = {
  requestTimeout: 8000,
  apiEndpoints: "/api/poverty-relief/h5/",
};

export default function API() {
  const apiHandler = createApiHandler(server_config);
  return createApiInstance(apiHandler);
}
