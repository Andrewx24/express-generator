import express from 'express';

const router = express.Router(); // Create a router instance

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router; // Use ES module export
