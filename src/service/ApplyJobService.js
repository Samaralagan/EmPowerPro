import axios from "axios";
import Employee from "../components/employee/Employee";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createVacancy = (jobVacancy) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/hr/vacancy-creation/", jobVacancy);

export const listVacancies = () =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/hr/vacancy-get-all");

export const updateVacancy = (vacancyId, jobVacancy) =>
  axios.put(
    BASE_URL_EMPLOYEE + "/api/hr/vacancy-update/" + vacancyId,
    jobVacancy
  );

export const deleteVacancy = (vacancyId) =>
  axios.put(BASE_URL_EMPLOYEE + "/api/hr/vacancy-delete/" + vacancyId);

export const getVacancy = (vacancyId) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/hr/vacancy-get-one/" + vacancyId);

// export const createEmployee = (employee) =>
//   axios.post(BASE_URL_EMPLOYEE + "/api/v1/employees/creation", employee);

export const createEmployee = (employee) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/admin/register", employee);
