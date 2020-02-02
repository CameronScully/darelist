const express = require('express');
const router = express.Router();

//Item model
const Dare = require('../../models/Dare.js');

// GET api/dares
router.get('/', (req, res) => {
  Dare.find()
  .then(dares => res.json(dares))
});

//POST api/dares
router.post('/', (req, res) => {
  const newDare = new Dare({
    text: req.body.text,
    pointValue: req.body.pointValue,
    challengable: req.body.challengable,
    nsfw: req.body.nsfw
  });

  newDare.save().then(dare => res.json(dare));
});

//Delete api/dares/:id
router.delete('/:id', (req, res) => {
  Dare.findById(req.params.id)
  .then(dare => dare.remove().then(() => res.json({success: true})))
  .catch(e => res.status(404).json({success: false}));
});

module.exports = router;
