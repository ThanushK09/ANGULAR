<!DOCTYPE html> 
<html> 
<title> 
Angular JS Full Name Pgm 
</title> 
<head> 
<script type="text/javascript" 
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"> 
</script> 
<script> 
var app=angular.module("myApp",[]); 
app.controller("myCntrl",function($scope){ 
$scope.firstName="  " 
$scope.lastName="  " 
}); 
</script> 
</head> 
<body ng-app="myApp"> 
<h2>Anjular JS Application to Display Full Name</h2> 
<div ng-controller="myCntrl"> 
Enter First Name: <input type="text" ng-model="firstName"><br/> 
Enter Last Name: <input type="text" ng-model="lastName"><br/> 
Your Full Name: {{firstName +" "+ lastName}} 
</div> 
</body> 
</html>