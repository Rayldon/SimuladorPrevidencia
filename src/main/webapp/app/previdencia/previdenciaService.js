define(["app"], function(app){
	app.service('previdenciaService', ['$http', function ($http) {
        
		this.calcularPrevidencia = function (contribuicaox, contribuicaoy, tempo) {
        	return $http({
        	    method: 'POST',
        	    url: '/previdencia/rest/servicos/calcularPrevidencia',
        	    headers: {
        	        'Content-Type': 'application/json',
        	        'Accept': 'application/json'
        	    },
        	    data: {
    	        	'contribuicaox': contribuicaox,
    	        	'contribuicaoy': contribuicaoy,
    	        	'tempo': tempo
        	    }
        	})
        };
        
	}]);
});