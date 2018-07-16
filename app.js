var app=angular.module("myApp",[]);
app.controller("myctr",function($scope,$http){
    $http.get("http://jsonplaceholder.typicode.com/posts").then(function(item){
        $scope.posts=item.data;
    });

})