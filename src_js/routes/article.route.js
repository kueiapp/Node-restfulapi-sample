// article.route.js
import express from 'express';
import articleCtrl from '../controllers/article.controller';

const bodyParser = require('body-parser');

const router = express.Router();

// need to use bodyParser HERE when designed in module
router.use(bodyParser.json())

/* parent route: /api
* /api/article            */

router.route('/')
  .get( articleCtrl.getArticle )
  .post( articleCtrl.insertArticle );

router.route('/:article_id')
  .put( articleCtrl.updateArticle )
  .delete( articleCtrl.deleteArticle );

export default router;
