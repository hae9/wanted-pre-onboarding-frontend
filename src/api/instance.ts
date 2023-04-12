import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: { 'Content-Type': 'application/json' },
});

const accessToken = localStorage.getItem('access_token');

export const authInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
});
