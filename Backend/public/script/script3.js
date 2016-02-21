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
      if(command.charAt(3) === 's') {
        command = command.substring(5);
        console.log("Synonym");
        getSynonym(command.replaceAll('`',''), select);
        $("#textarea").on("keydown", function (es) {
            $("#data-" + (es.keyCode - 48))[0].click();
            return false;
        });
      } else if(command.charAt(3) === 'a') {
        command = command.substring(5);
        console.log("Antonym");
        getAntonym(command.replaceAll('`',''), select);
        $("#textarea").on("keydown", function (es) {
            $("#data-" + (es.keyCode - 48))[0].click();
            return false;
        });
      } else if(command.charAt(3) === 'm') {
        command = command.substring(5);
        console.log("Movie");
        getMovie(command.replaceAll('`',''), select);
        $("#textarea").on("keydown", function (es) {
            $("#data-" + (es.keyCode - 48))[0].click();
            return false;
        });
      } else {
        command = command.substring(5);
        console.log("Search");
        getWolfram(command.replaceAll('`',''), select);
        $("#textarea").on("keydown", function (es) {
            $("#data-" + (es.keyCode - 48))[0].click();
            return false;
        });
      }
    }
  });
});
