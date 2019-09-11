chatAppModule.controller('loginCtrl',function($scope,loginService){
    console.log('Login called...');
    $scope.login=function()
    {
        let loginData={
            'email':$scope.email,
            'password':$scope.password
        }
        console.log('Login Data',loginData);
        loginService.loginServiceUser(loginData,$scope);
    }
        
    
})