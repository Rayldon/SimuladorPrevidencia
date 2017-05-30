/*AngularAMD é uma utilidade que facilita o uso de RequireJS em aplicações AngularJS 
que suportam o carregamento sob demanda de módulos de terceiros como angular-ui*/
define(["angularAMD", "angular-route"], function(angularAMD) {
    var app = angular.module("webapp", ["ngRoute"]);    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", angularAMD.route({
            templateUrl: "app/previdencia/previdencia.html",
            controller: "PrevidenciaController",
            //Aqui é definido dinamicamente o arquivo do controlador, que só será carregado caso essa rota seja acessada
            controllerUrl: "app/previdencia/previdenciaCtrl.js"
        }))
        .otherwise({
            redirectTo: "/"
        })
    });

    //Isso irá inicializar o aplicativo. Não é necessário definir 'ng-app' no arquivo HTML
    return angularAMD.bootstrap(app);
});