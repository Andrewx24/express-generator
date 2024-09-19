import express from 'express';

const router = express.Router(); // Create a router instance

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
