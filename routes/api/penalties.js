const express = require('express');
const router = express.Router();

//Item model
const Penalty = require('../../models/Penalty.js');

// GET api/penalties
router.get('/', (req, res) => {
  Penalty.find()
  .then(penalties => res.json(penalties))
});

//POST api/penalties
router.post('/', (req, res) => {
  const newPenalty = new Penalty({
    text: req.body.text
  });

  newPenalty.save().then(penalty => res.json(penalty));
});

//Delete api/penalties/:id
router.delete('/:id', (req, res) => {
  Penalty.findById(req.params.id)
  .then(penalty => penalty.remove().then(() => res.json({success: true})))
  .catch(e => res.status(404).json({success: false}));
});

module.exports = router;
