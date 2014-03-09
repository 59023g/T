'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  GameSchema = require('Games');

var TeamSchema = new mongoose.Schema({
	id: ObjectId,
  name: { type: String, trim: true, index: true },
  origin: String, //three letters?
  player: [ String, String, String ],
  games: [ GameSchema ]
});


var Teams = exports = module.exports = mongoose.model('Teams', TeamSchema);


exports.show = function (req, res, next) {
  var game = req.params.id;

  Game.findById(team, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};






var mongoose = require('mongoose'),
    Game = mongoose.model('Game');
    */