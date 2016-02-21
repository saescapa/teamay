function sendToServer(input) {
  console.log(input);
  return "function ()" + input.substring(3,input.indexOf("```",input.indexOf("```")+ 1));
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
    var select = quill.getSelection();
      console.log(select);
    if(command) {
      var select = quill.getSelection();
      var data = sendToServer(command);
      var html = quill.getHTML().replace(command,data);
      quill.setHTML(html);
      console.log(select.start - command.length + data.length - 1);
      quill.setSelection(select.start - command.length + data.length, select.end - command.length + data.length);
      //quill.setHTML(html.replace(command, "test"));//
    }
  });
});
