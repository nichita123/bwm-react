const express = require('express');
const router = express.Router();
const Service = require('../models/service');
const UserCtrl = require('../controllers/user');


router.get('/', UserCtrl.authMiddleware, function(req, res) {

  Service.find({})
      .exec(function(err, foundServices) {

    if (err) {
      return res.status(422).send({errors: normalizeErrors(err.errors)});
    }

    return res.json(foundServices);
  });
});

module.exports = router;