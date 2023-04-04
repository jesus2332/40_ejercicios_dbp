// Simular el lanzamiento de una moneda al aire e imprimir cara o cruz. 


results = ["cara", "cruz"]

flip = ()=> {
    return results[Math.floor(Math.random() * results.length)]
}

console.log(flip())