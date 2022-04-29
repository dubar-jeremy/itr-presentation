import { API, NEST_API } from '../configs/axios.config';

export const getPassengers = async () => await API.get('passenger?page=0&size=5');
export const getPassengerById = async (id) => await API.get(`passenger/${id}`);
export const getAirlineById = async (id) => await API.get(`airlines/${id}`);
export const createPassenger = async (data) => await API.post(`passenger/`, data);
export const updatePassenger = async (id, data) => await API.put(`passenger/${id}`, data);
export const getEmployees = async () => await NEST_API.get('employee');
