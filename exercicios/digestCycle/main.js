const api = angular.module('meuModulo', [])

api.controller('meuController', function($scope, $timeout){

    $scope.mudarNumeroParaUm = 0

    $scope.mostarNumeroDeWatchers = function(){
        console.log($scope.$$watchersCount)
    }

    $scope.mudandoNumeroParaUm = function() {
        $timeout(function(){ //teste com timeout nativo

                $scope.mudarNumeroParaUm = 1
                console.log("Variavel mudou para um");
           
        }, 2000)
        
    }



    $scope.$watch("mudarNumeroParaUm",  function(novoValor, antigoValor){
        console.log("Novo valor " + novoValor);
        console.log("Antigo valor " + antigoValor);
    })
})