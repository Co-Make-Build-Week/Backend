const request = require('supertest');
const db = require('../database/db-config.js');
const Users = require('../users/users-model.js');

const server = require('../api/server.js');

describe('auth-router.js', () => {

  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('add() helper model', () => {
    // it('returns 201 OK', async () => {
    //   // const expectedStatusCode = 201
    //   const response = await request(server).post('/api/auth/register').send({username: 'testing', password: '1234'});
    //   await expect(response.status).toBe(201)
    // })
    it('adds the users', async () => {
      const user = await Users.add({username: 'john', password: '1234'})
      // const {username} = await db('users')
      expect(user.username).toBe('john')
      expect(user.password).toBe('1234')
    });
    it('returns the users', async () => {
      await Users.add({username: 'carlo', password: '1234'})
      await Users.add({username: 'bryan', password: '1234'})
      const response = await Users.find()
      expect(response.length).toBe(2)
    })
  })
})