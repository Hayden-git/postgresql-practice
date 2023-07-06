

const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://tuser:hayden99@localhost:5432/postgres');


