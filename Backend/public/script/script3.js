
function getSection (str, delim) {
  var start = str.indexOf(delim);
  if (start === -1) return;

  var end = str.indexOf(delim, start + 1);
  if (end === -1) return;

  return str.substr(start, end + 3);
}

$(document).ready(function () {
  $("textarea#txtarea").on("click txtarea keyup", function (e) {
    var command = getSection($("textarea#txtarea").val(), "```");
    
    if(command) {
    
      getSynonym(command.replaceAll('`',''));
      console.log("hi");
    }
    
    var scope = angular.element(document.getElementById("main ai")).scope();
    var flag = scope.flag;
    if(flag && e.keyCode == 40){
    	console.log('flag set');
    	if(scope.synonyms && scope.synonyms.length>0){
    		
    	}
    }   
    
  });
  
  
  
  
  
});
