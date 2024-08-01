import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createSupplier = (supplier) => axios.post(BASE_URL_EMPLOYEE+"/api/finance/supplier-creation", supplier);

export const listSuppliers = () => axios.get(BASE_URL_EMPLOYEE+"/api/finance/supplier-get-all");

// export const updateVacancy  = (vacancyId, jobVacancy) => axios.put(BASE_URL_EMPLOYEE+"/api/hr/vacancy-update/" + vacancyId, jobVacancy);

// export const deleteVacancy = (vacancyId) => axios.put(BASE_URL_EMPLOYEE+"/api/hr/vacancy-delete/"+vacancyId);

// export const getVacancy = (vacancyId) => axios.get(BASE_URL_EMPLOYEE + "/api/hr/vacancy-get-one/" + vacancyId);

