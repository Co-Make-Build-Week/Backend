const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// IMPORTED ROUTES
const authRouter = require('../auth/auth-router.js');
const issuesRouter = require('../issues/issues-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTES
server.use('/api/auth', authRouter);
server.use('/api/issues', issuesRouter);

module.exports = server;