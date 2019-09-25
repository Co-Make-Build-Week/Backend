
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'brandon@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'bryan@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'carlo@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'daniel@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'eleasah@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'joshua@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'juan@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'sheila@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
        {username: 'pere@lambda.com', password: '$2a$10$C2STOBd5FxtEyw9QdEBl2uAakz0mEg4bA0kSkOQgsxEp3f4utvASK'},
      ]);
};
