import "./styles.css";

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "src/games.xml", false);
xmlhttp.send();
let XMLContent = xmlhttp.responseXML;

function getTable() {
  let tableRows =
    "<tr><th>Title</th><th>Price</th><th>Platform</th><th>Platform2</th><th>Platforms</th></tr>";
  let gameElements = XMLContent.getElementsByTagName("game");
  for (let i = 0; i < gameElements.length; i++) {
    let platforms = gameElements[i].getElementsByTagName("platforms")[0].getElementsByTagName("platform");
    
    tableRows +=
      "<tr><td>" +
      gameElements[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</td><td>" +
      gameElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
      "</td><td>" +
      platforms[0].childNodes[0].nodeValue +
      "</td><td>" +
      (platforms.length > 1 ? platforms[1].childNodes[0].nodeValue : "") +
      "</td><td>";

    for (let j = 0; j < platforms.length; j++) {
      tableRows +=
        platforms[j].childNodes[0].nodeValue +
        (j < platforms.length - 1 ? ", " : "");
    }

    tableRows += "</td></tr>";
  }

  document.getElementById("xmlTable").innerHTML = tableRows;
}

document.getElementById("app").innerHTML = `<table id="xmlTable"></table>`;

getTable();
