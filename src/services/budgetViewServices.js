import axios from "axios";
import { apiEndpoints } from "./apiEndpoints";

export const getBudgetList = async () => {
    return await axios.get(apiEndpoints.viewBudgetData);
  };