const request = require("supertest");
const server = require("../api/server");
const db = require("../database/db-config");

// console.log("JWT_SECRET:", process.env.JWT_SECRET);

async function registerToken() {
  const response = await request(server)
    .post("/api/auth/register")
    .send({ username: "test2", password: "1234" });
  const token = response.body.token;
  return token;
}

async function post() {
  const token = await registerToken();
  const response = await request(server)
    .post("/api/issues")
    .send({ title: "Test title", category: "roads" })
    .set("authorization", token);
  const issue = response.body;
  return { issue, token };
}

async function put(id, newCategory, token) {
  const response = await request(server)
    .put(`/api/issues/${id}`)
    .send({category: `${newCategory}`})
    .set("authorization", token);
  const updatedIssue = response;
  return updatedIssue;
}

describe("Issues router", () => {
  beforeEach(async () => {
    await db("users").truncate();
    await db("issues").truncate();
  });

  describe("GET /api/issues", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await db("issues").truncate();
    });
    it("should return 400 Bad Request and 'Please provide a token on authorization header' if no token is sent", async () => {
      const get = await request(server).get("/api/issues");
      expect(get.status).toBe(400);
      expect(get.body.message).toBe(
        "Please provide a token on authorization header"
      );
    });
    it("should return 401 Unauthorized and 'Invalid token' if bad token is sent", async () => {
      const get = await request(server)
        .get("/api/issues")
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVsZWFzYWhAbGFtYmRhLmNvbSIsInVzZXJpZCI6NSwiaWF0IjoxNTY5NTE5MjIyLCJleHAiOjE1Njk5NTEyMjJ9.SGZMwP_w7SLzwwVPXNeLm4am6qZ1sxOgx1RWtv0eLB0"
        );
      expect(get.status).toBe(401);
      expect(get.body.message).toBe("Invalid token");
    });
    it("should return 200 and list of issues with a valid token", async () => {
      const token = await registerToken();
      const response = await request(server)
        .get("/api/issues")
        .set("authorization", token);
      expect(response.status).toBe(200);
    });
  });

  describe("POST /api/issues", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await db("issues").truncate();
    });

    it("returns 201 and issue with valid token and issue", async () => {
      const token = await registerToken();
      const response = await request(server)
        .post("/api/issues")
        .send({ title: "Test title", category: "roads" })
        .set("authorization", token);
      expect(response.status).toBe(201);
    });
    it("returns 401 if invalid token is sent", async () => {
      const response = await request(server)
        .post("/api/issues")
        .send({ title: "Test title", category: "roads" })
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVsZWFzYWhAbGFtYmRhLmNvbSIsInVzZXJpZCI6NSwiaWF0IjoxNTY5NTE5MjIyLCJleHAiOjE1Njk5NTEyMjJ9.SGZMwP_w7SLzwwVPXNeLm4am6qZ1sxOgx1RWtv0eLB0"
        );
      expect(response.status).toBe(401);
    });
    // todo: write middleware to validate new issues, return 400 if missing required fields
    it("returns 500 if category is not included on issue", async () => {
      const token = await registerToken();
      const response = await request(server)
        .post("/api/issues")
        .send({ title: "Test title" })
        .set("authorization", token);
      expect(response.status).toBe(500);
    });
  });

  describe("GET /:id", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await db("issues").truncate();
    });

    it("POST issue, GET same issue on /:id, receive issue and status 200", async () => {
      const { issue, token } = await post();
      const response = await request(server)
        .get(`/api/issues/${issue.id}`)
        .set("authorization", token);
      expect(response.status).toBe(200);
      expect(response.body.id).toBe(issue.id);
      expect(response.body.category).toBe(issue.category);
    });
    it("GET returns 404 not found and message if issue does not exist", async () => {
      const token = await registerToken();
      const response = await request(server)
        .get("/api/issues/3")
        .set("authorization", token);
      expect(response.status).toBe(404);
    });
  });

  describe("PUT /:id", () => {
    beforeEach(async () => {
      await db("users").truncate();
      await db("issues").truncate();
    });

    it('POST issue, PUT same issue with different category, receive 201 and updated category', async () => {
     const { issue, token } = await post();
     const updatedIssue = await put(issue.id, 'landscape', token)
     expect(updatedIssue.status).toBe(201);
     expect(updatedIssue.body.id).toBe(issue.id);
     expect(updatedIssue.body.category).toBe('landscape');
    });
  });
});
