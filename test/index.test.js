const assert = require('assert');
const request = require('supertest');

const API_URL = 'https://fastpay-app-ezckema9bmgqagcf.canadacentral-01.azurewebsites.net'; 

describe('Home page FastPay API', () => {
  it('debería responder 200 en /', async () => {
    const res = await request(API_URL).get('/');
    assert.strictEqual(res.status, 200);
    // resultado esperado 
    assert.ok(res.text.includes('FastPay') || res.text.length > 0);
  });
});