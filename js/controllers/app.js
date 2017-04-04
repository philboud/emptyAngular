var appPersonList = angular.module('appPersonList', [
    // Dépendances du "module"
    'personList'
]);

/**
 * Déclaration du module todoList
 */
var personList = angular.module('personList',[]);
personList.controller('persoCtrl', ['$scope',
    function ($scope) {  $scope.message = '';
  $scope.utilisateurs = [];
  $scope.user = {nom: '', prenom: '', email:''};
  $scope.soumission = function (valid) {
    if(valid) {
      $scope.utilisateurs.push($scope.user);
      $scope.user = {nom: '', prenom: '', email:''};
    }
    else {
      $scope.messageClass ='alert-danger';
      $scope.message = 'Désolé mais il y a des données non valides !';
    }
  };
}
]);
