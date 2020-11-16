const body = document.querySelector("body");
body.className = "body";

const flexprincipale = document.createElement("div");
flexprincipale.className = "flex";

const afficheResult = document.createElement("div");
afficheResult.className = "result";
afficheResult.textContent = "0";

let tab = [
  "(",
  ")",
  "%",
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
flexprincipale.appendChild(afficheResult);
for (let i = 0; i < tab.length; i++) {
  button = document.createElement("div");
  button.textContent = tab[i];
  button.className = "button";

  if (i % 4 === 0) {
    line = document.createElement("div");
    line.className = "flexC";
  }

  body.appendChild(flexprincipale);

  flexprincipale.appendChild(line);
  line.appendChild(button);

  let table = tab[i];
  switch (table) {
    case "AC":
      button.addEventListener("click", function () {
        afficheResult.textContent = "";
      });
      break;

    case "=":
      button.addEventListener("click", function () {
        console.log("aa");
        console.log(afficheResult.textContent);
        afficheResult.textContent = eval(afficheResult.textContent);
      });
      break;

    default:
      button.addEventListener("click", function () {
        afficheResult.textContent += tab[i];
        console.log(tab[i]);
      });
  }
}
