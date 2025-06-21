const BASE_URL = 'https://medication-management-backend-cang.onrender.com/api';

export const signup = async ({ username, password, role }) => {
  const res = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Signup failed');
  }

  return await res.json(); // returns { token }
};

export const login = async ({ username, password }) => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  return await res.json(); // returns { token }
};
