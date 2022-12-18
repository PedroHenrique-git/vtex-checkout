import ky from 'ky';

export const api = ky.create({
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
