angular.module('starter.controllers', [])


.controller('MenuCtrl', function($scope, $ionicHistory, $state) {
  $scope.items = ["1","2","3"];
})

.controller('LoginCtrl', function($scope, $ionicHistory, $state) {
  $scope.gotoProfile = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('tab.profile');

  }
})

.controller('CreateprojectCtrl', function($scope,$ionicHistory, $state) {
  $scope.goBack = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('tab.profile');
  }
})
.controller('editprofileCtrl', function($scope,$ionicHistory, $state) {
  $scope.goBack = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('tab.profile');
  }
})
.controller('AddpartnerCtrl', function($scope,$ionicHistory, $state) {
  $scope.goBack = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('tab.partners');
  }
})
.controller('userBenCtrl', function($scope,$ionicHistory, $state) {
  $scope.items = ["1","2","3"];
  $scope.goBack = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('tab.partners');
  }
})

.controller('SignupCtrl', function($scope, $ionicHistory, $state) {
  $scope.goBack = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('login');
  }
})

.controller('HomeCtrl', function($scope) {
  $scope.items = ["1","2","3"];
  $scope.trigger_open = function(){
      $("#home_Overlay").addClass("overlay");
  }
  $scope.trigger_close = function(){
      $("#home_Overlay").removeClass("overlay");
  }
})

.controller('PartnersCtrl', function($scope, $ionicHistory, $state) {
  $scope.gotoAddpartner = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('addpartner');
  }
  $scope.gotoUserBen = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('userBen');
  }
  $scope.trigger_open = function(){
      $("#partner_Overlay").addClass("overlay");
  }
  $scope.trigger_close = function(){
      $("#partner_Overlay").removeClass("overlay");
  }
})

.controller('TasksCtrl', function($scope) {
  $scope.tasks1=[
    {"taskname":"create new UI", "user":"Adam"},
    {"taskname":"create new function", "user":"Ben"}
  ];
  $scope.tasks2=[
    {"taskname":"create new UI", "user":"Adam"},
    {"taskname":"create new function", "user":"Ben"}
  ];
  $scope.trigger_open = function(){
      $("#task_Overlay").addClass("overlay");
  }
  $scope.trigger_close = function(){
      $("#task_Overlay").removeClass("overlay");
  }
})

.controller('ProfileCtrl', function($scope, $ionicHistory, $state) {
  $scope.gotoCreateproject = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('createproject');
  }
  $scope.gotoEditprofile = function()
  {
      $ionicHistory.nextViewOptions({
          disableBack: true
      });
      $state.go('editprofile');
  }
  $scope.trigger_open = function(){
      $("#profile_Overlay").addClass("overlay");
  }
  $scope.trigger_close = function(){
      $("#profile_Overlay").removeClass("overlay");
  }
});
