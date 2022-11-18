const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const userTest = {
  email: 'test@test.com',
  password: '123456',
};

describe('/api/v1/users route', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/api/v1/users route', async () => {
    const res = await request(app).post('/api/v1/users').send(userTest);
    const { email } = userTest;
    expect(res.body).toEqual({
      id: expect.any(String),
      email,
    });
  });
  afterAll(() => {
    pool.end();
  });
});
