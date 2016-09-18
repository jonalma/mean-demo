//mongod --dbpath /data/db --smallfiles

var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
  name: String
});