'use strict';

var mongoose = require('mongoose'),
	Game =  mongoose.model('Games');


exports.show = function (req, res, next) {
  var game = req.params.id;

  Game.findById(team, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

