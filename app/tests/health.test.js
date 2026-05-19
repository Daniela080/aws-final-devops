const request = require('supertest');
const app = require('../index.js');

describe('Health endpoints', () => {
  test('GET /health responde 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/test responde 200', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });
});