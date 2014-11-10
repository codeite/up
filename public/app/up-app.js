var app = angular.module('upApp', [])

app.controller('MainCtrl', function($scope, $timeout, $http){
  $scope.isUp = "Checking..."
  $scope.delay = 0

  var update = function(){
    console.log("Waiting ", $scope.delay, " until update")

    $scope.delay--;

    if($scope.delay <= 0) {
      $scope.delay = 5

      $http.get('/up')
        .success(function() {
          $scope.isUp = "Up!";
          $scope.faviconUrl = '/images/up-favicon.ico'
        })
        .error(function() {
          $scope.isUp = "Internet down :(";
          $scope.faviconUrl = '/images/down-favicon.ico'
        })

    }

    $timeout(update, 1000)
  }

  $timeout(update, 1000)
})
