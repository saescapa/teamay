getSynonym = function(keyword){
	alert(keyword);
	$.get("/synonyms?searchKeyword="+keyword+"", function(data){
		var scope = angular.element(document.getElementById("MainWrap")).scope();
			    scope.$apply(function () {
			        scope.showSynonyms(data);
			    });
	});
}