<!DOCTYPE html> 
<html> 
<title>Date Application</title> 
<head> 
<script type="text/javascript" 
src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"> 
</script> 
<script> 
var app=angular.module("dateApp",[]); 
app.controller("dateAppCntrl",function($scope){ 
$scope.currentDate=new Date(); 
}); 
</script> 
</head> 
<body ng-app="dateApp"> 
<h1>Date in different formats</h1> 
<div ng-controller="dateAppCntrl"> 
Current Date and Time: {{currentDate}}<br/> 
Short Date: {{currentDate|date: 'short'}}<br/> 
Long Date: {{currentDate |date: 'fullDate'}}<br/> 
Medium Date:{{currentDate| date: 'medium'}} 
</div> 
</body> 
</html>