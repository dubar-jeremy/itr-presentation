import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  getAirlineById,
  getPassengers,
  createPassenger,
  updatePassenger,
  getPassengerById,
  getEmployees,
} from '../services/api';

export const useGetAirlineById = (id) => {
  return useQuery('get-airline-by-id', () => getAirlineById(id), {
    retry: 2
  });
};

export const useGetPassengers = () => {
  return useQuery('get-passengers', () => getPassengers());
};

export const useGetPassengerById = (id) => {
  return useQuery('get-passenger-by-id', () => getPassengerById(id));
};

export const useCreatePassenger = () => {
  return useMutation((data) => createPassenger(data));
};

export const useUpdatePassenger = (id) => {
  const queryClient = useQueryClient();
  return useMutation((data) => updatePassenger(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries('get-passenger-by-id');
    },
  });
};

export const useGetEmployees = () => {
  return useQuery('get-employees', () => getEmployees());
};
