chatAppModule.service('loginService',function($http,$location){
    this.loginServiceUser=function(data,$scope){
        console.log("login service ",data)
        $http({
            method:'POST',
            url:'http://localhost:3000/login',
            data:data
        }).then(
            function(response)
            {
                if(response.data.content==false)
                {
                    console.log('login failed');
                    console.log(response);

                    $scope.login=function(){
                        alert('login failed ...');
                    }
                }else{
                    console.log('login Successfully');
                    console.log(response);

                    $scope.login=function()
                    {
                        alert('login successfully');
                    }
                }
                $location.path('./message');
            }).catch(function(error){
                $scope.login=function(){
                    alert('login failed');
                }
                console.log('Login failed ...',error);
            });
    }
});