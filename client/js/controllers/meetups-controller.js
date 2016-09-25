// https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
// http://stackoverflow.com/questions/33058075/using-resource-to-delete-from-database
// https://www.sitepoint.com/premium/books/angularjs-novice-to-ninja/preview/understanding-angularjs-resource-e0638c0
//The variable app is angular.module('meetupApp', ['ngResource'])
app.controller('meetupsController', ['$scope', '$resource',
  function($scope, $resource) {
    
    var Meetup = $resource('/api/meetups');
    var MeetupID = $resource('/api/meetups/:MeetupID', {}, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }
    });
    
    $scope.meetups = [];
    
    //Return all meetups
    Meetup.query(function(results) {
      $scope.meetups = results;
    })
    
    //Create a meetup
    $scope.createMeetup = function() {
      var meetupObj = new Meetup();
      meetupObj.name = $scope.meetupName;
      meetupObj.$save(function(result) {
        $scope.meetups.push(result);
        $scope.meetupName = '';
      });
    }
    
    // Delete a Meetup
    $scope.deleteMeetup = function(id, index) {
      var mid = new MeetupID();
      // delete() and remove() issue a DELETE request to the URL '/api/meetups/:MeetupID'
      // replace MeetupID with id
      mid.$remove({MeetupID: id}, function() {
        // splice(start, deletecount[,item1[,item2]]) = changes content of array by removing/adding elements 
        $scope.meetups.splice(index, 1);
      })
    }
    
    
    //Update a Meetup
    //http://stackoverflow.com/questions/21339406/angularjs-mongolab-resource-update-error
    $scope.updateMeetup = function(id, index) {
      var mid = new MeetupID();
      mid.name = $scope.meetups[index].name;
      
      mid.$update({MeetupID: id}, function(result){
        $scope.meetups[index].name = result.name;
      });
      
    }
    
  }
]);