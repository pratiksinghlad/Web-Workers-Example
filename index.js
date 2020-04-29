var myWorker;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (!myWorker) {
      myWorker = new Worker("webWorker.js");
    }

    myWorker.onmessage = function (event) {
      setInnerHtml(event.data);
    };
  } else {
    setInnerHtml("Sorry, your browser does not support Web Workers...");
  }

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      var txt = "<table id='apiTable' border='1'>";
      for (x in json) {
        txt += "<tr><td>" + json[x].name + "</td></tr>";
      }
      txt += "</table>";
      setInnerHtml(txt, "jsonData");
    });
}

function stopWorker() {
  myWorker.terminate();
  myWorker = undefined;
  setInnerHtml(0);
  setInnerHtml("", "jsonData");
}

function setInnerHtml(value, id ) {
  if(!id)
  {
    id="result";
  }
  document.getElementById(id).innerHTML = value;
}
