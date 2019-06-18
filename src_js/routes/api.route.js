/* index.route.js
*
*/

// import express from 'express';
// import config from '../config/config.js';

const express = require("express")
const setting = require("../config/setting.js")

const router = express.Router();

/*
* GET localhost:[port]/api page.
* parent route is /api
*/
router.get('/', (req, res) => {
  res.send(`here is /api`);
});

import ARTICLEROUTE from "./article.route.js"
router.use('/article', ARTICLEROUTE);

// ES6
export default router;

// ES5
// module.exports = router;
