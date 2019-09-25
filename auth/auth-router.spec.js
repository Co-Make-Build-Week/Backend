const request = require('supertest');
const db = require('../database/db-config.js');
const Users = require('../users/users-model.js');

const server = require('../api/server.js');

describe('auth-router.js', () => {
  describe('GET /api/auth/users', () => {
    it('returns 200 OK', () => {
      return request(server).get('/api/auth/users').then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
})