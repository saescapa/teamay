function sendToServer(input) {
  console.log(input);
  return "test";
}

function getSection (str, delim) {
	console.log(str);
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
      $("textarea#txtarea").val($("textarea#txtarea").val().replace(command, sendToServer(command)));
      console.log("hi");
      console.log($("textarea#txtarea"));
    }
  });
});
