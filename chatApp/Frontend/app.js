let chatAppModule = angular.module('chatAppModule',['ui.router']);

chatAppModule.config(['$stateProvider','$urlRouterProvider',($stateProvider,$urlRouterProvider)=>{
    $stateProvider
    .state('registration',{
        url:'/registration',
        templateUrl:'template/registration.html',
        controller:'registrationCtrl'
    })
    
    .state('login',{
        url:'/login',
        templateUrl:'template/login.html',
        controller:'loginCtrl'
    })

    $urlRouterProvider.otherwise('login')
}])