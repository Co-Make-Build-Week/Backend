const request = require('supertest');
const server = require('../api/server');

describe('server', () => {
    it('should return an OK status code from /api/issues route', async () => {
        const get = await request(server).get('/api/auth/users')
        expect(get.status).toBe(201)

    });
});