define(["app"], function(app){
	app.service('dataService', ['$http', function ($http) {
        this.getCustomers = function () {
        	return $http.get("/previdencia/rest/rest/users");
        };
	}]);
});