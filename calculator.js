const body = document.querySelector("body");
body.className = "body";

const flexprincipale = document.createElement("div");
flexprincipale.className = "flex";

const afficheResult = document.createElement("div");
afficheResult.className = "result";
afficheResult.innerHTML = "";

const afficheHistorique = document.createElement('div')
afficheHistorique.className = "affiche"
afficheHistorique.innerHTML = afficheResult.innerHTML

flexprincipale.appendChild(afficheHistorique)

function creerBloqueHisto(input) {
    const afficheHisto = document.createElement('p')
    afficheHisto.innerHTML = input
    afficheHisto.className = "histo"

    afficheHistorique.appendChild(afficheHisto)
}

function safeEval(str){
    return Function('return ' + str)()
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
let noDoubleDots = false
let inter = false 

flexprincipale.appendChild(afficheResult);

function getHisto(afficheResult) {
    return "=" + afficheResult.innerHTML
}

for (let i = 0; i < tab.length; i++) {
    button = document.createElement("div");
    button.innerHTML = tab[i];
    button.className = "button";

    if (i === 18){
        button.className =  "egale"
    }

    if ((i === 7)||(i === 11)||(i === 15)||(i === 19)){
        button.className =  "operation"
    }

    if (i % 4 === 0) {
        line = document.createElement("div");
        line.className = "flexC";
    }
    if (i ===2){
        button.className = "delete"
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

                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false
                inter  = false
            });
            break;

            case "DEL":
                button.addEventListener("click", function () {
                    afficheResult.innerHTML= afficheResult.innerHTML.toString().slice(0, -1)  ;
                    afficheHistorique.innerHTML= afficheHistorique.innerHTML.toString().slice(0, -1)  ;
                    
    
                    if (!noDoubleDots) {
                        noDoubleDots = true
                    }
                    noDoubleDots = false
                    inter  = false
                });
                break;

        case "=":
            button.addEventListener("click", function () {
                
                afficheResult.innerHTML = safeEval(afficheResult.innerHTML);
                afficheHistorique.innerHTML += getHisto(afficheResult)
                

                if (!noDoubleDots) {
                    noDoubleDots = true
                }
               inter = true
            });
            break;
            
        case ".":
            button.addEventListener('click', function () {
                if (!noDoubleDots) {
                    noDoubleDots = true
                    afficheResult.innerHTML += "."
                    afficheHistorique.innerHTML += "."
                }

                
            })
            break;


        case "+":
            button.addEventListener('click', function () {
                afficheResult.innerHTML += "+"
                afficheHistorique.innerHTML += "+"
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false
                inter  = false
            })
            break;

        case "-":
            button.addEventListener('click', function () {
                afficheResult.innerHTML += "-"
                afficheHistorique.innerHTML += "-"
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false
                inter  = false
            })
            break;

        case "*":
            button.addEventListener('click', function () {
                afficheResult.innerHTML += "*"
                afficheHistorique.innerHTML += "*"
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false
                inter  = false
            })
            break;

        case "/":
            button.addEventListener('click', function () {
                afficheResult.innerHTML += "/"
                afficheHistorique.innerHTML += "/"
                if (!noDoubleDots) {
                    noDoubleDots = true
                }
                noDoubleDots = false
                inter  = false
            })
            break;

        default:
            button.addEventListener("click", function () {
             
             
            if (inter === true){
                afficheResult.innerHTML = ""
                afficheHistorique.innerHTML  = ""
            }
            inter = false
            if (inter === false){
                afficheResult.innerHTML += tab[i];
                console.log(tab[i]);
                afficheHistorique.innerHTML += tab[i]
            }
            });
    }

}
body.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        afficheResult.innerHTML = safeEval(afficheResult.innerHTML);
        afficheHistorique.innerHTML += getHisto(afficheResult)
    }
    if (!noDoubleDots) {
        noDoubleDots = true
    }
   inter = true
})