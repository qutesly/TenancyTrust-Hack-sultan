import api from "./axiosInstance";


export  const getAllUsers = () => api.get("/users/");
export const getUserById = (id) => api.get(`/users/${id}/`);