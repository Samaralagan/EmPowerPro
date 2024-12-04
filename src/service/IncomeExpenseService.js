import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createAccount = (account) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/finance/accounts-creation", account);

export const listAccounts = () =>
  axios.get(BASE_URL_EMPLOYEE + "/api/finance/accounts-get-all");

export const createDateMarker = (data) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/teamlead/markcalendar-create", data);

export const getAllcalendarMarker = (id) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/getAllMarker/" + id);

export const updateCalenderMarker = (Id, data) =>
  axios.put(BASE_URL_EMPLOYEE + "/api/v1/teamlead/update-state/" + Id, data);

export const deleteCalenderMarker = (Id) =>
  axios.delete(BASE_URL_EMPLOYEE + "/api/v1/teamlead/deleteMarker/" + Id);
