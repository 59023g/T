'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  TeamSchema = require('./teams.js');


/**
 * Thing Schema
 */

var GameSchema = new mongoose.Schema({
  game: {
  	id: ObjectId,
    location: String,
    date: Date, //date.now?
    team: [{
    	info: [TeamSchema],	      
      score: [{
        value: Number,
        time: Number,
        whoScored: String
      }]
    }]
  }
});



// A model is a class with which we construct documents.
var Game = exports = module.exports = mongoose.model('Games', GameSchema);


Game.remove({}, function (err) {
	  if (err) {
    console.log ('error deleting old data.');
  }
});

var johndoe = new Game({
  game: {
    location: 'San Francisco',
    date: new Date,
    team: [{
      score: [{
        value: 1,
        time: 234,
        whoScored: 'MP'
      }]
    }, {
      score: [{
        value: 2,
        time: 4,
        whoScored: 'MP2'
      }]
    }]
  }
});


johndoe.save(function(err) {
  if (err) console.log('Error on save!')
});

/**
 * Validations
 
GameSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');



var Team = mongoose.model('Teams', TeamSchema, 'Games');

/*Team.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});




var teamTest = new Team ({
	team: 'nicks',
	origin: 'San Francisco',
	player: ['MP', 'MP2', 'MP3']
});


teamTest.save(function (err) {if (err) console.log ('Error on save!')});


* virtuals shorten queries

personSchema.virtual('name.full').get(function () {
  return this.name.first + ' ' + this.name.last;
});


/**
 * Methods
 
GameSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   
  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   
  encryptPassword: function(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};
*/
