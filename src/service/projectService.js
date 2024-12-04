import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createProject = (data) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/executive/createProject", data);

export const getAllProject = async () =>
  await axios.get(BASE_URL_EMPLOYEE + "/api/v1/executive/getAllProject");
