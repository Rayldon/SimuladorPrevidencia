define([
	"app", 
	"../../../previdencia/previdenciaService",
	"../../../js/filters",
	"../../../js/directives"
], function(app){
	app.controller('PrevidenciaController', ['$scope','previdenciaService', 
		function($scope, previdenciaService){
			$scope.contribuicaox = "";
			$scope.contribuicaoy = "";
			$scope.tempo = "";
			$scope.dados = "";

			$scope.calcularPrevidencia = function(){
				$scope.validarContribuicaoX();
				$scope.validarContribuicaoY();
				$scope.validarTempo();
				if($scope.contribuicaox != "" && $scope.contribuicaoY != "" && $scope.tempo != ""){
					previdenciaService.calcularPrevidencia($scope.contribuicaox, $scope.contribuicaoy, $scope.tempo)
		            .then(function (response) {
		                $scope.dados = response.data;
		            },function (error){
		                $scope.msg = 'Unable to load customer data: ' + error.message;
		            });
				}
			}
			
			$scope.validarContribuicaoX = function(){
				if(parseFloat($scope.contribuicaox) < 1){
					alert("A contribuição X não pode ser menor que 1%");
					$scope.contribuicaox = "";
				}else if(parseFloat($scope.contribuicaox) > 4){
					alert("A contribuição X não pode ser maior que 4%");
					$scope.contribuicaox = "";
				}
			}
			
			$scope.validarContribuicaoY = function(){
				if(parseFloat($scope.contribuicaoy) < 0){
					alert("A contribuição Y não pode ser menor que 0%");
					$scope.contribuicaoy = "";
				}else if(parseFloat($scope.contribuicaoy) > 8){
					alert("A contribuição Y não pode ser maior que 8%");
					$scope.contribuicaoy = "";
				}
			}
			
			$scope.validarTempo = function(){
				if(parseInt($scope.tempo) < 2){
					alert("O tempo mínimo de contribuição é de 2 anos");
					$scope.tempo = "";
				}else if(parseInt($scope.tempo) > 35){
					alert("O tempo máximo de contribuição é de 35 anos");
					$scope.tempo = "";
				}
			}
		}
	]);
});