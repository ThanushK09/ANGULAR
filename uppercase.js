<!DOCTYPE html> 
<html> 
<title>Student Details in Uppercase</title> 
<head> 
<script type="text/javascript" 
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"> 
</script> 
<script> 
var app=angular.module("studDetailsUpperApp",[]); 
app.controller("studDetailsUpperAppCntrl",function($scope){ 
$scope.studDetails=['harish','kumar','chetan','prashanth','thanuja'] 
$scope.upper=true 
$scope.lower=false 
$scope.Lower=function() 
{ 
//console.log('called') 
$scope.upper=false 
$scope.lower=true 
} 
$scope.Upper=function() 
{ 
$scope.upper=true 
$scope.lower=false 
} 
}); 
</script> 
</head> 
<body ng-app="studDetailsUpperApp"> 
<h1>Student Details in Uppercase</h1> 
<div ng-controller="studDetailsUpperAppCntrl"> 
<button ng-click="Upper()">Upper</button> 
<button ng-click="Lower()">Lower</button> 
<table border="1"> 
<tr> 
<th>SLNO</th> 
<th>NAME</th> 
</tr> 
<tr ng-repeat="student in studDetails"> 
<td>{{$index+1}}</td> 
<td ng-show="upper">{{student|uppercase}}</td>
<td ng-show="lower">{{student|lowercase}}</td> 
</tr> 
</table> 
</div> 
</body> 
</html>