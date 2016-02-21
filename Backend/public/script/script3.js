function sendToServer(input) {
  console.log(input);
  //return "function ()" + input.substring(3,input.indexOf("```",input.indexOf("```")+ 1));
}

function getSection (str, delim) {
  var start = str.indexOf(delim);
  if (start === -1) return;

  var end = str.indexOf(delim, start + 1);
  if (end === -1) return;

  return str.substr(start, end - start + 3);
}

$(document).ready(function () {
  $("#textarea").on("click textarea keyup", function (e) {
    var command = getSection(quill.getHTML(), "```");
    if(command) {
      var select = quill.getSelection();
      getSynonym(command.replaceAll('`',''), select);
      $("#textarea").on("keydown", function (es) {
          $("#syn-" + (es.keyCode - 48))[0].click();
          return false;
      });
      //var html = quill.getHTML().replace(command,data);
      //quill.setHTML(html);
      //console.log(select.start - command.length + data.length - 1);
      // quill.setSelection(select.start - command.length + data.length, select.end - command.length + data.length);
      //quill.setHTML(html.replace(command, "test"));//
    }
  });
});


// $(document).ready(function () {
//   $("textarea#txtarea").on("click txtarea keyup", function (e) {
//     var command = getSection($("textarea#txtarea").val(), "```");
//
//     if(command) {
//
//       getSynonym(command.replaceAll('`',''));
//       console.log("hi");
//     }
//
//     var scope = angular.element(document.getElementById("main ai")).scope();
//     var flag = scope.flag;
//     if(flag && e.keyCode == 40){
//     	console.log('flag set');
//     	if(scope.synonyms && scope.synonyms.length>0){
//
//     	}
//     }
//
//   });
//
//
//
//
//
// });
