import "./styles.css";

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "src/games.xml", false);
xmlhttp.send();
let XMLContent = xmlhttp.responseXML;

function getTable() {
  let tableRows = "<tr><th>Title</th><th>Price</th><th>Platform</th></tr>";
  let gameElements = XMLContent.getElementsByTagName("game");
  for (let i = 0; i < gameElements.length; i++) {
    tableRows +=
      "<tr><td>" +
      gameElements[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</td><td>" +
      gameElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
      "</td><td>" +
      gameElements[i].getElementsByTagName("platforms")[0].getElementsByTagName("platform")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  document.getElementById("xmlTable").innerHTML = tableRows;
}

document.getElementById("app").innerHTML = `<table id="xmlTable"></table>`;

getTable();
