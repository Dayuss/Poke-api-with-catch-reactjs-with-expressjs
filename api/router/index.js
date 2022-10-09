const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/api/poke', require("../controller/pokeController"))
router.use('/api/mine', require("../controller/myPokeController"))
module.exports = router;