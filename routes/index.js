const router = require('express');
const router = express.Router();

router.get('/', (reg, res) => { res.send('Hello World')});

router.use('/users', require('./users'));

module.exports = router;