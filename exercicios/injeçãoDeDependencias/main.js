const api = angular.module('meuModulo', [])

api.controller('meuController', function($scope, $filter, $location){

    $scope.plataforma = "aplicativoX"

    $scope.transformarEmMaiusculo = function(){
        $scope.plataforma = $filter("uppercase")($scope.plataforma)
    }

    $scope.parms = $location.search()
})