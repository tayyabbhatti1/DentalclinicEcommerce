import axios from "axios";

const url = "http://localhost:5000";


export const addForm = async (data) => {
  return await axios.post(`${url}/addForm`, data);
};


export const getForm = async () => {
  return await axios.get(`${url}/formDetail`);
};