import axios, { AxiosError } from 'axios';
import { instance } from './instance';

export const signUp = async (inputs: signData) => {
  try {
    const res = await instance.post(`/auth/signup`, {
      email: inputs.email,
      password: inputs.password,
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      alert(message);
    } else {
      console.log(error);
    }
  }
};

export const signIn = async (inputs: signData) => {
  try {
    const res = await instance.post(`/auth/signin`, {
      email: inputs.email,
      password: inputs.password,
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message;
      alert(message);
    } else {
      console.log(error);
    }
  }
};
