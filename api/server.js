const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// IMPORTED ROUTES
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTES
server.use('/api/auth', authRouter)

module.exports = server;