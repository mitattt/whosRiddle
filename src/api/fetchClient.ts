import { THint } from '../types/THint';
import { TNotification } from '../types/TNotification';
import { TRating } from '../types/TRating';
import { TRiddle } from '../types/TRiddle';

const BASE_URL = 'http://10.0.2.2:3001';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }
  const response = await fetch(BASE_URL + url, options);
  return response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};

export const getAllRiddles = () => {
  return client.get<TRiddle[]>('/riddles');
};

export const getAllNotifications = () => {
  return client.get<TNotification[]>('/notifications');
};

export const getAllHints = () => {
  return client.get<THint[]>('/hints');
};

export const getRating = () => {
  return client.get<TRating>('/rating');
};
