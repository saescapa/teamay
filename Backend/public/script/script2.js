function sendToserver(input) {
  console.log(input);
}

$(document).ready(function () {
  //var pattern = /[^\(<i>\)]```(\w|.\w)+```[^\(</i>\)]/g;
  var patternStart = /([^\(<font style=\"background\-color: yellow\">\)]|\s)```/g;
  var patternEnd = /```[\(</font>\)]/g;

  var patternEndS = /[\(<font style=\"background\-color: yellow\">\)]```/g;
  var color = "#E5C07B";
  //
  //
  // //var text = " ```hello```   ```lol``` ";
  // var count = 0;
  // console.log(text.match(pattern));
  // while(pattern.search(text) != -1) {
  //   pattern.exec(text).index
  // }
  $.fn.selectRange = function(start, end) {
    if(end === undefined) {
        end = start;
    }
    return this.each(function() {
        if('selectionStart' in this) {
            this.selectionStart = start;
            this.selectionEnd = end;
        } else if(this.setSelectionRange) {
            this.setSelectionRange(start, end);
        } else if(this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

  var currentCombination = [];
  var open = false;
  $("#textarea").on("click textarea keyup", function (e) {
    if(e.type == "keyup") {
      console.log(e.keyCode);
      if(e.keyCode == 192 && !open) {
        console.log("`");
        currentCombination.push("`");
        if(currentCombination.length == 3) {
          currentCombination = [];
          console.log("Triggered");
          var index = patternStart.exec($("#textarea")[0].innerHTML).index;
          var content = $("#textarea")[0].innerHTML;
          $("#textarea")[0].innerHTML = content.slice(0, index + 1) + "<font style=\"background-color: yellow\">```" + $("#textarea")[0].innerHTML.slice(index + 44) + "</font>";
          console.log($("#textarea"));
          $("#textarea").caret(index);
          open = true;
        }
      } else if (e.keyCode == 192 && open) {
        console.log("`");
        currentCombination.push("`");
        if(currentCombination.length == 3) {
          var content = $("#textarea")[0].innerHTML;
          //console.log(content.substring(content.indexOf("```") + 3,content.indexOf("```",content.indexOf("```") + 1)));
          var keyword = content.substring(content.indexOf("```") + 3,content.indexOf("```",content.indexOf("```") + 1));
          var replace = getSynonym(keyword); // Front to Backend call
          var indexStart = patternEndS.exec($("#textarea")[0].innerHTML).index;
          var indexEnd = patternEnd.exec($("#textarea")[0].innerHTML).index;
          var content = $("#textarea")[0].innerHTML;
          $("#textarea")[0].innerHTML = content.slice(0, indexStart + 1) + "<font style=\"background-color: red\">```" + replace + $("#textarea")[0].innerHTML.slice(indexEnd) + "</font>";
          console.log($("#textarea"));
          $("#textarea").caret(indexEnd + replace.length + 71);
          open = false;
          currentCombination = [];
        } else if(e.keyCode == 8) {
          currentCombination.pop();
        }
      }
    }
    console.log(open);
    console.log(currentCombination);
    //console.log($("#textarea")[0].innerHTML.match(pattern));
  });

});
