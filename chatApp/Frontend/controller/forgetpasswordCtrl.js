chatAppModule.controller('forgetPasswordCtrl',function($scope,forgetpasswordService){
    console.log('forgetpassword is called...',$scope.email);
    $scope.forgetPassword=function(){
        let forgetPassword={
            email:$scope.email
        }
        console.log('forgotpassword Data :',forgetPassword);
        forgetpasswordService.forgetPasswordServiceUser(forgetPassword,$scope);
    }
    
  
});