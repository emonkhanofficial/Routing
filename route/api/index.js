const express = require ("express");
const router = express.Router();

// const AutoRouter = require(./)

const AutoRouter = require('./registration')


router.use('/authentication',AutoRouter)


module.exports = router;