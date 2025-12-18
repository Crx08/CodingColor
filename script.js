console.log("Inizio esecuzione");
let d = new Date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDate();

let colori = [];
function elabora(){
    let numero = document.getElementById("inNumber").value;
    alert(numero);

    if(numero >= 0 && numero <= 255){
        // iserirre il numero dentro l'array
        colori.push(numero);
        // visuallizzare il numero dentro il div output
        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;

        // visuallizzare i numeri inseriti
        document.getElementById("outText").innerHTML +=
            "<br> I colori inseriti sono:" + colori;
            console.log(colori);

            if(colori.length == 3){
                newColor = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
                document.getElementById("outText").style.color += newColor;
            }

    }else {
        // messaggio dentro il div error
        document.getElementById("error").innerHTML = "Il numero inserito non va bene"
    }

}







function reset(){
    document.getElementById("error").innerHTML = "";

}