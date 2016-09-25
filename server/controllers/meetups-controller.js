var Meetup = require('../models/meetup');

module.exports.create = function(req, res) {
  console.log("create");
  var meetup = new Meetup(req.body);
  meetup.save(function(err, result) {
    res.json(result);
  });
};

module.exports.list = function(req, res) {
  Meetup.find({}, function(err, results) {
    res.json(results);
  });
};

module.exports.remove = function(req, res) {
  console.log(req.params);

  Meetup.remove({_id: req.params.MeetupID}, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
};

module.exports.updateMeetup = function(req, res) {  
    console.log(req.params);
    var id = {_id: req.params.MeetupID};
  
    Meetup.findOneAndUpdate(id, {name: "Jon"}, function(err, result){
      if (err) throw err;
        res.json(result);
    });
      
};
  