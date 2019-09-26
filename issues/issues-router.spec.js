const request = require('supertest');
const server = require('../api/server');

describe('/api/issues', () => {
    it("should return 400 Bad Request and 'Please provide a token on authorization header' if no token is sent", async () => {
        const get = await request(server).get('/api/issues')
        expect(get.status).toBe(400)
        expect(get.body.message).toBe('Please provide a token on authorization header')
    });
    it("should return 401 Unauthorized and 'Invalid token' if bad token is sent", async () => {
        const get = await request(server).get('/api/issues').set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVsZWFzYWhAbGFtYmRhLmNvbSIsInVzZXJpZCI6NSwiaWF0IjoxNTY5NTE5MjIyLCJleHAiOjE1Njk5NTEyMjJ9.SGZMwP_w7SLzwwVPXNeLm4am6qZ1sxOgx1RWtv0eLB0')
        expect(get.status).toBe(401)
        expect(get.body.message).toBe('Invalid token')
    });

});