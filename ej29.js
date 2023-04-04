
results = [1,2,3,4,5,6]
rollDice = ()=> {
    return results[Math.floor(Math.random() * results.length)]
}

let counter = 0
for(let i =1; i<=100; i++){
    dice1=rollDice()
    dice2=rollDice()
    if(dice1+dice2 ==10){
        counter++
    }

}
console.log("Se tiraron 100 veces los dados y sumaron 10 en "+counter+" ocasiones")