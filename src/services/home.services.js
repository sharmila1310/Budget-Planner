import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";

export const getDepartmentData = async () => {
  return await axios.get(apiEndpoints.departmentFilter);
};
export const getPracticeData = async (id) => {
  //   return await axios.get(
  //     `http://localhost:3000/budget-app/practice-filter?id=${id}`
  //   );
  return await axios.get(`${apiEndpoints.practiceFilter}?id=${id}`);
};
export const getCustomerData = async () => {
  return await axios.get(apiEndpoints.customerFilter);
};
export const saveBudgetData = async (data) => {
  return await axios.post(apiEndpoints.saveFilter, data);
};
