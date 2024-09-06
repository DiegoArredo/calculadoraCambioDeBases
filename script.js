function toInt(str){
    if(isNaN(parseInt(str))){
        switch(str.toLowerCase()){
            case "a":
                return 10;
            case "b":
                return 11;
            case "c":
                return 12;
            case "d":
                return 13;
            case "e":
                return 14;
            case "f":
                return 15;
            default:
                false;
        }
    }
    return parseInt(str)
}

function toStr(num){
    if(num > 9){ 
        switch(parseInt(num)){
            case 10:
                return "a";
            case 11:
                return "b";
            case 12:
                return "c";
            case 13:
                return "d";
            case 14:
                return "e";
            case 15:
                return "f";
        }
    }else{
    return (num.toString())
    }
};


function toDecimalfromAll(strValor, base){
    let decimal = 0;
    let arraystr = strValor.split(".")
    for (let i = 0; i < arraystr[0].length; i++) {
        // console.log(arraystr[0][i])
        // console.log(arraystr[0].length - 1 -i)
        decimal += toInt(arraystr[0][i]) * Math.pow(base,arraystr[0].length - 1 - i)
    }
    if (arraystr[1]){
        // console.l og("entro")
        for (let i = 0; i < arraystr[1].length; i++) {
            // console.log(arraystr[1][i])
            // console.log(-1-i)
            decimal += toInt(arraystr[1][i]) * Math.pow(base,-1 - i)
        }
    }
    // console.log(decimal)
    return decimal
}

function fromDecimalTo(strDecimal,base){
    let result = ""
    let subresult = ""
    let arraystr = strDecimal.split(".")
    // console.log(decimal)
    let resto = 0
    decimal = parseInt(arraystr[0])
    while (decimal != 0){
        resto = decimal % base;
        result += toStr(resto);
        decimal = Math.floor(decimal / base);
        // console.log(decimal)
        console.log(result.split("").reverse().join(""))
        console.log(resto)
    }
    result = result.split("").reverse().join("")
    if (arraystr[1]){
        let subdecimal = "0." +arraystr[1]
        // console.log(subdecimal)
        subdecimal = parseFloat(subdecimal)
        while (subdecimal != 0 || subresult.length < 10){
            subdecimal = subdecimal * base
            subresult += toStr(Math.trunc(subdecimal))
            subdecimal = subdecimal - parseInt(subdecimal)
            console.log(subresult)
            console.log(subdecimal)
        }
        subresult = "." + subresult
    }
    if (result == ""){
        result = "0"
    }
    console.log(result + subresult)
    return (result + subresult)
    }

