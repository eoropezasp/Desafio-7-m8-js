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

/* Creo un nuevo array con el campo interes agregado */
let info = creditos.map(credito => {
    let interes = calcularInteres(credito.capital, credito.plazo, credito.tasa)
    return {
        ...credito,
        interes
    }
})

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

mostrar()