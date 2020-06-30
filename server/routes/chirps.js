const express = require('express');
const chirpStore = require('../chirpstore');
let router = express.Router();


router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.send(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }

})

//Used with postman
router.post('/', (req, res) => {
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    }
    chirpStore.CreateChirp(chirpObj);
    res.sendStatus(200)
})

// router.post('/')

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    };
    if(id) {
       chirpStore.UpdateChirp(id, chirpObj);
       res.sendStatus(200)
    } else {
        res.send('Oops!')
    }
})

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);    
    res.send(`Chirp ${id} is now gone`);
})
module.exports = router;
