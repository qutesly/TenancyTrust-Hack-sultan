import api from "./axiosInstance";

export const getProperties = async (category) => {
  const response = await api.get("/properties/", {
    params: category ? { category } : {},
  });
  console.log(response.data)
  return response.data;
};
