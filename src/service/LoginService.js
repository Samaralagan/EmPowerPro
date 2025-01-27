import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const checkLogin = (username, password) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/auth/login", { username, password });

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "ADMIN";
};

export const isHr = () => {
  const role = localStorage.getItem("role");
  return role === "HR";
};
export const isExecutive = () => {
  const role = localStorage.getItem("role");
  return role === "ADMIN";
};
export const isTeamLead = () => {
  const role = localStorage.getItem("role");
  return role === "TEAMLEAD";
};
export const isFinace = () => {
  const role = localStorage.getItem("role");
  return role === "FINANCE";
};

export const isEmployee = () => {
  const role = localStorage.getItem("role");
  return role === "EMPLOYEE";
};
