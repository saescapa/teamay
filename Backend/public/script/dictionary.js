getSynonym = function(keyword, select){
	$.get("/synonyms?searchKeyword="+keyword+"", function(data){
		console.log("HELLO" + data);
		var scope = angular.element(document.getElementById("main ai")).scope();
    scope.$apply(function () {
        scope.displayResult(keyword,data, select, "synonym");
    });
	}).fail(function() {
		var scope = angular.element(document.getElementById("main ai")).scope();
    scope.$apply(function () {
        scope.displayResult(keyword,"error", select, "synonym");
    });
	});
}

getAntonym = function(keyword, select){
	$.get("/antonyms?searchKeyword="+keyword+"", function(data){
		var scope = angular.element(document.getElementById("main ai")).scope();
    scope.$apply(function () {
        scope.displayResult(keyword,data, select, "antonym");
    });
	}).fail(function() {
		var scope = angular.element(document.getElementById("main ai")).scope();
    scope.$apply(function () {
        scope.displayResult(keyword,"error", select, "antonym");
    });
	});
}

getWolfram = function(keyword, select){
	$.get("/wsearch?searchQuery="+keyword+"", function(data){
		if(data){
			 var html = quill.getHTML().replace("```g."+keyword+"```",data);
			 quill.focus();
			 quill.setHTML(html);
			 quill.setSelection(select.start - (keyword.length + 8) + data.length, select.end - (keyword.length + 8) + data.length);
		}
	});
}
