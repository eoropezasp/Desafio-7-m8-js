const creditos = [
    {
        plan: "001",
        capital: 150000,
        plazo: 30,
        tasa: 15 
    },
    {
        plan: "002",
        capital: 300000,
        plazo: 180,
        tasa: 10 
    },
    {
        plan: "003",
        capital: 485000,
        plazo: 60,
        tasa: 23 
    },
]

/* Funcion para calcular el interes de los planes */
function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * (tasa/100)) / 100
}

/* Funcion que crea un nuevo array con el campo interes agregado */
function datosFinales(array) {
        return array.map(el => {
        let interes = calcularInteres(el.capital, el.plazo, el.tasa)
        return {
            ...el,
            interes
        }
    })
}

/* Funcion para mostrar por consola los datos finales */
function mostrar() {
    info.forEach(el => {
        console.log("*".repeat(20));
        console.log("\nPLAN: " + el.plan)
        console.log("CAPITAL: "+ "$"+ el.capital)
        console.log("PLAZO: " + el.plazo + " dias")
        console.log("TASA: " + el.tasa + "%")
        console.log("INTERES: " + "$"+ el.interes + "\n")
    });
}

let info = datosFinales(creditos)

mostrar()