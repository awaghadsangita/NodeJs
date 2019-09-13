chatAppModule.service('forgetpasswordService',function($http,$location){

    this.forgetPasswordServiceUser=function(data,$scope){
        $http({
            method:'POST',
            url:'http://localhost:3000/forgetPassword',
            data:data
        }).then(
            function(response){
                if(response.data.content==false){
                    console.log('this is not register email address');
                    console.log(response);

                    $scope.forgetPassword=function(){
                        alert('this is not registered email address...');
                    }
                }else{
                    console.log('email send successfully');
                    console.log(response);

                    $scope.forgetPassword=function(){
                        alert('email send successfully...');
                    }
                }
                $location.path('./message');
            }
        ).catch(function(error){
            $scope.forgetPassword=function(){
                alert('email sending failed ...');
            }
            console.log('email sending failed...',error);
        });
    }
});