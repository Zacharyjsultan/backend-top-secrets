const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const userTest = {
  email: 'test@test.com',
  password: '123456',
};

describe('users route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/api/v1/users posts registers new user', async () => {
    const res = await request(app).post('/api/v1/users').send(userTest);
    const { email } = userTest;
    expect(res.body).toEqual({
      id: expect.any(String),
      email,
    });
  });
  test('/sessions post signs in an  user', async () => {
    await request(app).post('/api/v1/users').send(userTest);
    const res = await request(app)
      .post('/api/v1/users/sessions')
      .send({ email: 'test@test.com', password: '123456' });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Successful Login');
  });
});
afterAll(() => {
  pool.end();
});
