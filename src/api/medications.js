import { api } from './index';

export const getMedications = async (token) => {
  return api('/medications', 'GET', null, token);
};

export const addMedication = async (medication, token) => {
  return api('/medications', 'POST', medication, token);
};

export const markMedicationTaken = async ({ medId, date }, token) => {
  return api('/medications/taken', 'POST', { medId, date }, token);
};
