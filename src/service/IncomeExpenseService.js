import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createAccount = (account) => axios.post(BASE_URL_EMPLOYEE+"/api/finance/accounts-creation", account);

export const listAccounts = () => axios.get(BASE_URL_EMPLOYEE+"/api/finance/accounts-get-all");