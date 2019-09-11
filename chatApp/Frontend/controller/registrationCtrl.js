chatAppModule.controller('registrationCtrl',function($scope,registerService){
    console.log('registration called');
    $scope.register=function(){
        let registrationData={
            'firstName':$scope.firstName,
            'lastName':$scope.lastName,
            'email':$scope.email,
            'password':$scope.password
        }
        console.log('Register Data :',registrationData);
        registerService.registerServicesUser(registrationData,$scope);
    }
})