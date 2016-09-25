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

//https://github.com/elvece/crud-meetups/blob/master/server/routes/api.js
module.exports.updateMeetup = function(req, res) {  
    console.log(req.body.name);
    var id = {_id: req.params.MeetupID};
  
    Meetup.findOneAndUpdate(id, {name: req.body.name}, function(err, result){
      if (err) throw err;
        res.json(result);
    });
      
};
  