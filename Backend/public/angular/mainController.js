var angularApp = angular.module('EditorApp', []);
angularApp.controller('EditorCtrl', ['$scope', function ($scope) {
	$scope.cards = [];
	$scope.flag = false;
	$scope.customParams = {};
	$scope.data = [];

	$scope.displayResult = function(keyword, data, select, type) {
	    var dataArr = [];
			console.log(data);
	    if (data._) {
	        dataArr = data._.replaceAll(" ", "").split(',');
	    } else {
	        dataArr = data.replaceAll(" ", "").split(',');
	    }
	    for (var i = 0; i < dataArr.length; i++) {
	        $scope.data[i] = {
	            command: keyword,
	            content: dataArr[i],
							type: type
	        }
	    }
			console.log($scope.data);
			$scope.cards.push($scope.data);
	    $scope.flag = true;
	    $scope.select = select;
	};

	$scope.replaceCommand = function(command, content, type) {
		if (command[0] == command[0].toUpperCase()) {
			content = content[0].toUpperCase() + content.substring(1);
		}
		var html = quill.getHTML().replace("```" + type[0] + "." + command + "```", content);
		if (content == "error") {
			quill.focus();
			quill.setHTML(html);
			quill.setSelection($scope.select.start - (command.length + 8), $scope.select.end - (command.length + 8) + content.length);
		} else {
			quill.focus();
			quill.setHTML(html);
			quill.setSelection($scope.select.start - (command.length + 8) + content.length, $scope.select.end - (command.length + 8) + content.length);
		}
		$scope.data = [];
		$scope.flag = false;
	};
}]);
