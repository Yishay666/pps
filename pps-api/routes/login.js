let router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Log In Page!');
})

module.exports = router;