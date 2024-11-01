import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";
 
export const createBlog = (data) => axios.post(BASE_URL_EMPLOYEE+"/api/teamlead/blog-create", data);

export const getAllBlog = () => axios.get(BASE_URL_EMPLOYEE+"/api/teamlead/all-blogs");

export const updateAddFavourite= (Id,data) => axios.put(BASE_URL_EMPLOYEE+'/api/teamlead/update-addfavourote/'+Id,data);

export const createAddFavourite = (data) => axios.post(BASE_URL_EMPLOYEE+"/api/teamlead/addfavorite-create", data);

export const getAddFavourite = () => axios.get(BASE_URL_EMPLOYEE+"/api/teamlead/all-addfavourite");

