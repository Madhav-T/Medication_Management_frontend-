// src/api/medications.js
import {api} from './index';

export const getMedications = async () => {
  const res = await api.get('/medications');
  return res.data;
};

export const addMedication = async (medication) => {
  const res = await api.post('/medications', medication);
  return res.data;
};

export const markMedicationTaken = async ({ medId, date }) => {
  const res = await api.post('/medications/taken', { medId, date });
  return res.data;
};
