const request = require('supertest');
const db = require('../database/db-config.js');
const Users = require('../users/users-model.js');

const server = require('../api/server.js');

describe('auth-router.js', () => {

  beforeEach(async () => {
    await db('users').truncate();
  })

  describe('POST /api/auth/register', () => {
    it('returns 201 OK', async () => {
      const user = {
        username: "bryan", 
        password: "1234"
      }
        const res = await request(server).post('/api/auth/register').send(user)
        expect(res.status).toBe(201)
    })
    it('returns JSON', async () => {
      const user = {
        username: "bryan", 
        password: "1234"
      }
      const res = await request(server).post('/api/auth/register').send(user)
      expect(res.type).toBe('application/json')
    })
  })

  describe('POST /api/auth/login', () => {
    it('returns JSON', async () => {
      const user = {
        username: "bryan", 
        password: "1234"
      }
      const res = await request(server).post('/api/auth/login').send(user)
      expect(res.type).toBe('application/json')
    })
    it('returns 200 OK', async () => {
      const user = {
        username: "bryan", 
        password: "1234"
      }
      await request(server).post('/api/auth/register').send(user)
      const res = await request(server).post('/api/auth/login').send(user)
      expect(res.status).toBe(200)
    })
    it('returns 401 Unauthorized', async () => {
      const user = {
        username: "leslie", 
        password: "1234"
      }
      await request(server).post('/api/auth/register').send(user)
      const res = await request(server).post('/api/auth/login').send({username: 'leslie', password: '1235'})
      expect(res.status).toBe(401)
    })
  })

  describe('add() helper model', () => {
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

  describe('findBy() helper model', () => {
    it('finds the user', async () => {
      await Users.add({username: 'carlo', password: '1234'})
      const filter = {username: 'carlo'}
      const user = await Users.findBy(filter).first()
      expect(user.username).toBe('carlo');
      expect(user.username).not.toBe('olaf');
    })
    it('finds by ID', async () => {
      await Users.add({username: 'bryan', password: '1234'})
      const user1 = await Users.findById(1).first()
      expect(user1.username).toBe('bryan')
      await Users.add({username: 'leslie', password: '5678'})
      const user2 = await Users.findById(2).first()
      expect(user2.username).toBe('leslie')
      await Users.add({username: 'eleasah', password: '5678'})
      const user3 = await Users.findById(3).first()
      expect(user3.username).not.toBe('sansa')
      expect(user3.username).toBe('eleasah')
    })
    it('finds another user by ID', async () => {
      await Users.add({username: 'leslie', password: '5678'})
      const user = await Users.findById(1).first()
      expect(user.username).toBe('leslie')
    })
  })
})