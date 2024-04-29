import axios from "axios";


const REST_API_BASE_URL="http://localhost:9090/api/employes";
const REST_API_BASE_URL_SAVE="http://localhost:9090/api/employes/emp";

export const listEmployess=()=>axios.get(REST_API_BASE_URL);


export const createEmployee = (employee)=>axios.post(REST_API_BASE_URL_SAVE,employee);

export const getEmployee = (employeed)=>axios.get(REST_API_BASE_URL+'/'+employeed);

export const UpdateEmployee = (employeed,employee)=>axios.put(REST_API_BASE_URL+'/'+employeed,employee);


export const deleteEmployee=(employeeId)=>axios.delete(REST_API_BASE_URL+'/'+employeeId);
