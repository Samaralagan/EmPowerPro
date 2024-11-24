import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createAttendance = (data) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/employees/createAttendance", data);
