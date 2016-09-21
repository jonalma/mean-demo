//The variable app is angular.module('meetupApp', ['ngResource'])
// http://stackoverflow.com/questions/33058075/using-resource-to-delete-from-database
app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
  var Meetup = $resource('/api/meetups');
  var MeetupID = $resource('/api/meetups/:MeetupID')
    
  Meetup.query(function (results) {
    $scope.meetups = results;
  });

  $scope.meetups = []

  $scope.createMeetup = function () {
    var meetup = new Meetup();
    meetup.name = $scope.meetupName;
    meetup.$save(function (result) {
      $scope.meetups.push(result);
      $scope.meetupName = '';
    });
  }
  
  // Delete a Meetup
  $scope.deleteMeetup = function (id, index) {
        var mid = new MeetupID();
        mid.$remove({MeetupID: id}, function () {
            $scope.meetups.splice(index, 1);
        })
        
    };

}]);