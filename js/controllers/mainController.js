angular.module('mainController', [])

  // create the controller and inject Angular's $scope
   .controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'This is Ladna\'s home page!';
        $scope.pageClass = 'page-home';
    });
     