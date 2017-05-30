define(["app", "dataFactory"], function(app){
	app.controller('TemperatureController', ['$scope','dataService', 
		function($scope, dataService){
	    	$scope.fromUnit = "CELSIUS";
			$scope.result = {'CELSIUS': '0', 'KELVIN':'0', 'FAHRENHEIT' : '0'};
			$scope.msg = "123";
			
			getCustomers();

		    function getCustomers() {
		    	dataService.getCustomers()
		            .then(function (response) {
		                $scope.msg = response.data.msg;
		            }, function (error) {
		                $scope.msg = 'Unable to load customer data: ' + error.message;
		            });
		    }
		}
	]);
});