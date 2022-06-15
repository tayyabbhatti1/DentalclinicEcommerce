import axios from "axios";

const url = "http://localhost:5000";


export const addForm2 = async (data) => {
  return await axios.post(`${url}/addForm2`, data);
};


export const getForm = async () => {
  return await axios.get(`${url}/BillingDetail`);
};