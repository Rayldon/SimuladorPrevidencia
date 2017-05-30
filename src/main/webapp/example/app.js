/*AngularAMD é uma utilidade que facilita o uso de RequireJS em aplicações AngularJS 
que suportam o carregamento sob demanda de módulos de terceiros como angular-ui*/
define(["angularAMD", "angular-route"], function(angularAMD) {
    var app = angular.module("webapp", ["ngRoute"]);    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: "view.html",
            controller: "HomeCtrl",
            //Aqui é definido dinamicamente o arquivo do controlador, que só será carregado caso essa rota seja acessada
            controllerUrl: "HomeCtrl.js"
        }))
        .when("/temperature", angularAMD.route({
            templateUrl: "view.html",
            controller: "TemperatureController",
            controllerUrl: "TemperatureCtrl.js"
        }))
        .when("/length", angularAMD.route({
            templateUrl: "view.html",
            controller: "LengthController",
            controllerUrl: "LengthCtrl.js"
        }))
        .otherwise({
            redirectTo: "/"
        })
    });

    //this will bootstrap the application. There is no need to define 'ng-app' in HTML file
    return angularAMD.bootstrap(app);
});