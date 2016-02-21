var angularApp = angular.module('EditorApp', []);
angularApp.controller('EditorCtrl', ['$scope', function ($scope) {
	$scope.flag = false;
    $scope.customParams = {};
    $scope.synonyms = [];
    $scope.showSynonyms = function (keyword, data, select) {
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
			$scope.select = select;
    };

    $scope.replaceSynonyms = function (command, synonym){
			console.log(command[0] == command[0].toUpperCase());
			 if(command[0] == command[0].toUpperCase()) {
				 synonym = synonym[0].toUpperCase() + synonym.substring(1);
			 }
			 console.log(synonym[0]);
       var html = quill.getHTML().replace("```"+command+"```",synonym);
			 quill.focus();
       quill.setHTML(html);
			 console.log($scope.select);
			 quill.setSelection($scope.select.start - (command.length + 6) + synonym.length, $scope.select.end - (command.length + 6) + synonym.length);
    	 $scope.synonyms = [];
    	 $scope.flag = false;
    };
}]);
