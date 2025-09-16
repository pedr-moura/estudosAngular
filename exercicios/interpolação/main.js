const api = angular.module('meuModulo', [])

api.controller('meuController', function($scope){

    $scope.name = "Pedro Lucas";
    $scope.profissao = "Desenvolvedor"

    $scope.dizOla = function() {
        return "Olá mundo!"
    }

})