chatAppModule.controller('resetpasswordCtrl',function($scope,$stateParams,resetpasswordService){
    console.log('resetpassword called...');
    console.log("Token get ",$stateParams.token)
    $scope.resetPassword=function(){
        let resetpasswordData={
            'password':$scope.newPassword,
            'token':$stateParams.token
        }
        console.log('resetpassword Data '+resetpasswordData);
        resetpasswordService.resetpasswordServiceUser(resetpasswordData,$scope);
    }
    
})