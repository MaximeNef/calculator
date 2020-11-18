const body = document.querySelector("body");
body.className = "body";

const flexprincipale = document.createElement("div");
flexprincipale.className = "flex";

const afficheResult = document.createElement("div");
afficheResult.className = "result";
afficheResult.innerHTML = "";

const afficheHistorique = document.createElement("div");
afficheHistorique.className = "affiche";
afficheHistorique.innerHTML = afficheResult.innerHTML;

flexprincipale.appendChild(afficheHistorique);

const BIG_CONTAINER = document.createElement("div");
BIG_CONTAINER.className = "allinfo";

const BIG_HISTORIC = document.createElement("div");
BIG_HISTORIC.className = "historic";

let buttonhide = document.createElement("BUTTON");

buttonhide.innerHTML = "HISTORIQUE DES OPERATIONS";
BIG_CONTAINER.appendChild(buttonhide);
buttonhide.addEventListener("click", function () {
  const historique = document.getElementsByClassName("historic")[0];
  console.log(BIG_HISTORIC.style.display);
  if (historique.style.opacity === "1") {
    //historique.style.display = "none";
    historique.style.opacity = "0";
  } else {
    //historique.style.display = "block";
    historique.style.opacity = "1";
  }
});

body.appendChild(BIG_CONTAINER);
BIG_CONTAINER.appendChild(flexprincipale);
BIG_CONTAINER.appendChild(BIG_HISTORIC);

function safeEval(str) {
  return Function("return " + str)();
}

let tab = [
  "(",
  ")",
  "DEL",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

let line;
let button;
let noDoubleDots = false;
let inter = false;

flexprincipale.appendChild(afficheResult);

function getHisto(afficheResult) {
  return "=" + afficheResult.innerHTML;
}

for (let i = 0; i < tab.length; i++) {
  button = document.createElement("div");
  button.innerHTML = tab[i];
  button.className = "button";

  if (i === 18) {
    button.className = "egale";
  }

  if (i === 7 || i === 11 || i === 15 || i === 19) {
    button.className = "operation";
  }

  if (i % 4 === 0) {
    line = document.createElement("div");
    line.className = "flexC";
  }
  if (i === 2) {
    button.className = "delete";
  }
  body.appendChild(flexprincipale);
  flexprincipale.appendChild(line);
  line.appendChild(button);

  let table = tab[i];
  switch (table) {
    case "AC":
      button.addEventListener("click", function () {
        afficheResult.innerHTML = "";
        afficheHistorique.innerHTML = "";
        BIG_HISTORIC.innerHTML += "<br>";

        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    case "DEL":
      button.addEventListener("click", function () {
        afficheResult.innerHTML = afficheResult.innerHTML
          .toString()
          .slice(0, -1);
        afficheHistorique.innerHTML = afficheHistorique.innerHTML
          .toString()
          .slice(0, -1);
        BIG_HISTORIC.innerHTML = BIG_HISTORIC.innerHTML.toString().slice(0, -1);
        

        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    case "=":
      button.addEventListener("click", function () {
        afficheResult.innerHTML = safeEval(afficheResult.innerHTML);
        afficheHistorique.innerHTML += getHisto(afficheResult);
        BIG_HISTORIC.innerHTML += getHisto(afficheResult) + "<br>";

        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        inter = true;
      });
      break;

    case ".":
      button.addEventListener("click", function () {
        BIG_HISTORIC.innerHTML += ".";
        if (!noDoubleDots) {
          noDoubleDots = true;
          afficheResult.innerHTML += ".";
          afficheHistorique.innerHTML += ".";
        }
      });
      break;

    case "+":
      button.addEventListener("click", function () {
        afficheResult.innerHTML += "+";
        afficheHistorique.innerHTML += "+";
        BIG_HISTORIC.innerHTML += "+";
        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    case "-":
      button.addEventListener("click", function () {
        afficheResult.innerHTML += "-";
        afficheHistorique.innerHTML += "-";
        BIG_HISTORIC.innerHTML += "-";
        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    case "*":
      button.addEventListener("click", function () {
        afficheResult.innerHTML += "*";
        afficheHistorique.innerHTML += "*";
        BIG_HISTORIC.innerHTML += "*";
        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    case "/":
      button.addEventListener("click", function () {
        afficheResult.innerHTML += "/";
        afficheHistorique.innerHTML += "/";
        BIG_HISTORIC.innerHTML += "/";

        if (!noDoubleDots) {
          noDoubleDots = true;
        }
        noDoubleDots = false;
        inter = false;
      });
      break;

    default:
      button.addEventListener("click", function () {
        BIG_HISTORIC.innerHTML += tab[i];

        if (inter === true) {
          afficheResult.innerHTML = "";
          afficheHistorique.innerHTML = "";
        }
        inter = false;
        if (inter === false) {
          afficheResult.innerHTML += tab[i];
          console.log(tab[i]);
          afficheHistorique.innerHTML += tab[i];
        }
      });
  }
}
body.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    afficheResult.innerHTML = safeEval(afficheResult.innerHTML);
    afficheHistorique.innerHTML += getHisto(afficheResult);
    BIG_HISTORIC.innerHTML += getHisto(afficheResult) + "<br>";
  }
  if (!noDoubleDots) {
    noDoubleDots = true;
  }
  inter = true;
});
