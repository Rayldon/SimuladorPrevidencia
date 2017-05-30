define(["app"],function(app){
    app.controller('LengthController', function($scope) {	
    	$scope.fromUnit = "CENTIMETER";
		$scope.result = {'CENTIMETER':'0', 'METER':'0','INCH':'0'};
		 
                 $scope.getValue = function(temp){
			var cm = temp;
			var m = 0.01 * temp;
			var inch = 0.393700787401575 * temp; 
			$scope.result = {'CENTIMETER':cm, 'METER':m,'INCH':inch};
		};
	})
});