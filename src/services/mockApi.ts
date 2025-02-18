import { api } from './api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(api, { delayResponse: 1000 });

mock.onPost('/auth/login').reply(config => {
  const { email } = JSON.parse(config.data);
  return email.includes('success@example.com')
    ? [200, { success: true, data: { id: '1', email } }]
    : [401, { success: false, message: 'Invalid credentials' }];
});

mock.onPost('/users').reply(200, {
  success: true,
  data: { id: '1', name: 'Mock User', email: 'mock@example.com', age: 25 },
});