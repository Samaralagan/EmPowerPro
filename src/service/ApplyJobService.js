import axios from "axios";
import Employee from "../components/employee/Employee";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createVacancy = (jobVacancy) => {
  const token = localStorage.getItem("token"); // Retrieve the token from storage
  return axios.post(
    BASE_URL_EMPLOYEE + "/api/v1/hr/vacancy-creation",
    jobVacancy,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const listVacancies = () => {
  const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
  return axios.get(BASE_URL_EMPLOYEE + "/api/v1/hr/vacancy-get-all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateVacancy = (vacancyId, jobVacancy) =>
  axios.put(
    BASE_URL_EMPLOYEE + "/api/hr/vacancy-update/" + vacancyId,
    jobVacancy
  );

export const deleteVacancy = (vacancyId) =>
  axios.put(BASE_URL_EMPLOYEE + "/api/hr/vacancy-delete/" + vacancyId);

export const getVacancy = (vacancyId) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/hr/vacancy-get-one/" + vacancyId);

export const createEmployee = (employee) => {
  const token = localStorage.getItem("token");
  return axios.post(BASE_URL_EMPLOYEE + "/api/v1/admin/register", employee, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
