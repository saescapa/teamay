function sendToServer(input) {
  console.log(input);
  return "test";
}

function getSection (str, delim) {
  var start = str.indexOf(delim);
  if (start === -1) return;

  var end = str.indexOf(delim, start + 1);
  if (end === -1) return;

  return str.substr(start, end + 3);
}

$(document).ready(function () {
  $("#textarea").on("click textarea keyup", function (e) {
    var command = getSection($("#textarea")[0].innerText, "```");
    if(command) {
      $("#textarea")[0].innerHTML = $("#textarea")[0].innerHTML.replace(command, sendToServer(command));
      $("textarea").val("Two Values").focus().val("Two Values");
    }
  });
});
