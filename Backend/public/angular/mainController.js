var angularApp = angular.module('EditorApp', []);
angularApp.controller('EditorCtrl', ['$scope', function ($scope) {

    $scope.customParams = {};
    $scope.synonyms = "";
    $scope.showSynonyms = function (data) {
    	var dataArr = data.replace(" ","").split(',');
    	synonyms = dataArr;
    };
}]);