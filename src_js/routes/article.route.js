// article.route.js
import express from 'express';
import articleCtrl from '../controllers/article.controller';

const router = express.Router();

// parent route
router.route('/')
  .get( articleCtrl.articleGet )
  .post( articleCtrl.articlePost );

export default router;
