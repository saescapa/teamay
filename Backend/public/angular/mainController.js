var angularApp = angular.module('EditorApp', []);
angularApp.controller('EditorCtrl', ['$scope', function ($scope) {
	$scope.flag = false;
    $scope.customParams = {};
    $scope.synonyms = [];
    $scope.showSynonyms = function (keyword, data) {
    	var dataArr = [];
    	if(data._){
    		dataArr = data._.replaceAll(" ","").split(',');
    	}else{
    		dataArr = data.replaceAll(" ","").split(',');
    	}    	
    	for(var i=0;i<dataArr.length;i++){
    		$scope.synonyms[i]={
    					command: keyword,
    					syn: dataArr[i]
    				}
    	}
    	console.log($scope.synonyms);
    	$scope.flag=true;
    };

    $scope.replaceSynonyms = function (command, synonym){
    	 $("textarea#txtarea").val($("textarea#txtarea").val().replace("```"+command+"```", synonym));
    	 $scope.synonyms = [];
    	 $scope.flag = false;
    };
}]);