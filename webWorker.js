  var i = 0;
//timer for web worker thread
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount(); 
