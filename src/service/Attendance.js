import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createAttendance = (userId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/createAttendance/"+ userId);

export const getAllAttendanceByUserId = (userId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/getAllAttendanceByUserId/"+ userId);

export const updateCheckout = (attendanceId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/updateCheckout/"+ attendanceId);

export const addBreakTime = (attendanceId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/addBreakTime/"+ attendanceId);

export const addContinueTime = (userId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/addContinueTime/"+ userId);

export const getAttendanceById = (attendanceId) =>axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/getAttendanceById/"+ attendanceId);
