
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
   $ionicConfigProvider.tabs.style('standard')
   $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl'
  })
  .state('createproject', {
    url: '/createproject',
    templateUrl: 'templates/createproject.html',
    controller: 'CreateprojectCtrl'
  })
  .state('editprofile', {
    url: '/editprofile',
    templateUrl: 'templates/editprofile.html',
    controller: 'editprofileCtrl'
  })
  .state('addpartner', {
    url: '/addpartner',
    templateUrl: 'templates/addpartner.html',
    controller: 'AddpartnerCtrl'
  })
  .state('userBen', {
    url: '/userBen',
    templateUrl: 'templates/userBen.html',
    controller: 'userBenCtrl'
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tabs/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.partners', {
      url: '/partners',
      views: {
        'tab-partners': {
          templateUrl: 'templates/tabs/partners.html',
          controller: 'PartnersCtrl'
        }
      }
    })

  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tab-tasks': {
        templateUrl: 'templates/tabs/tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tabs/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
