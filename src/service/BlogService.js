import axios from "axios";

const BASE_URL_EMPLOYEE = "http://localhost:8080";

export const createBlog = (data) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/teamlead/blog-create", data);

export const getAllBlog = () =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/all-blogs");

export const getAllFavouriteBlog = (userId) =>
  axios.get(
    BASE_URL_EMPLOYEE + "/api/v1/teamlead/getAllFavouriteBlog/" + userId
  );

export const getSearchBlog = (data) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/searchBlog?keyword=" + data);

// ---------------------------------------------AddFavourite Blog-----------------------------------------------------

export const createAddFavourite = (userId, blogId) =>
  axios.get(
    BASE_URL_EMPLOYEE +
      "/api/v1/teamlead/AddFavourite-create/" +
      userId +
      "/" +
      blogId
  );

export const deleteAddFavourite = (userId, blogId) =>
  axios.delete(
    BASE_URL_EMPLOYEE +
      "/api/v1/teamlead/deleteFavouriteBlog/" +
      userId +
      "/" +
      blogId
  );

// ------------------------------------------------------Blog Comment---------------------------------------------------------

export const createBlogComment = (data) =>
  axios.post(BASE_URL_EMPLOYEE + "/api/v1/teamlead/createBlogComment", data);

export const getAllBlogComment = (blogId) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/getBlogComment/" + blogId);

export const deleteBlogComment = (commentId) =>
  axios.delete(
    BASE_URL_EMPLOYEE + "/api/v1/teamlead/deleteBlogComment/" + commentId
  );

//---------------------------------------------------------Blog View ------------------------------------------------------------

export const createBlogView = (userId, blogId) =>
  axios.get(
    BASE_URL_EMPLOYEE +
      "/api/v1/teamlead/BlogView-create/" +
      userId +
      "/" +
      blogId
  );

export const getBlogViewCount = (blogId) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/BlogView-count/" + blogId);

//-------------------------------------------------------Blog Rating----------------------------------------------------------------

export const createBlogRating = (userId, blogId, rate) =>
  axios.get(
    BASE_URL_EMPLOYEE +
      "/api/v1/teamlead/BlogRating-create/" +
      userId +
      "/" +
      blogId +
      "/" +
      rate
  );

export const getBlogRating = (blogId) =>
  axios.get(BASE_URL_EMPLOYEE + "/api/v1/teamlead/getBlogRating/" + blogId);
