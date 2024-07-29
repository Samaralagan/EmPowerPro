import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080/api/hr";

export const createVacancy = (jobVacancy) => axios.post(BASE_URL_EMPLOYEE, jobVacancy);

export const listVacancies = () => axios.get(BASE_URL_EMPLOYEE);
