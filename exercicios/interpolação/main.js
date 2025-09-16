const api = angular.module('meuModulo', [])

api.controller('meuController', function($scope){

    $scope.lampada = 'apagada'

    $scope.acenderLampada = function() {
        $scope.lampada = 'acesa'
    }

    $scope.apagarLampada = function() {
        $scope.lampada = 'apagada'
    }

    $scope.statusLampada = function() {
        return 'A lampada está ' + $scope.lampada
    }

})