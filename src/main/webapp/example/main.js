require.config({
    paths: {
        //defining the variables to the path of respective js files present in the project folder.
        angular: 
        	"../angularjs/angular.min",      
        	"angular-route": "../angularjs/angular-route.min",
        angularAMD: 
        	"../angularjs/angularAMD.min"
    },
    shim: {
        //Aqui é definida a ordem em que os arquivos serão carregados, primeiro angular.min, depois angularAMD e angular-route
    	angularAMD: ["angular"],
        "angular-route": ["angular"]
    },
    //depois de carregar tudo, executará app.js
    deps: ["app"]
});