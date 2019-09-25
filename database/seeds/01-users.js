
exports.seed = function(knex) {
      return knex('users').insert([
        {id: 1, username: 'brandon@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 2, username: 'bryan@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 3, username: 'carlo@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 4, username: 'daniel@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 5, username: 'eleasah@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 6, username: 'joshua@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 7, username: 'juan@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 8, username: 'sheila@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {id: 9, username: 'pere@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
      ]);
};
