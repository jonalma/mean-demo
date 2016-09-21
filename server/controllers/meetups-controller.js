var Meetup = require('../models/meetup');

module.exports.create = function(req, res) {
  var meetup = new Meetup(req.body);
  console.log(meetup)
  meetup.save(function(err, result) {
    res.json(result);
  });
}

module.exports.list = function(req, res) {
  Meetup.find({}, function(err, results) {
    res.json(results);
  });
}

module.exports.remove = function(req, res) {
    console.log(req.params);
    //var poll = new Poll(req.body);
    Meetup.remove({_id: req.params.MeetupID}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
};