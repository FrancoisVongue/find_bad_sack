const GOOD = 100;
const BAD = 90;

function createNSacks(n) {
    let sacks = [];
    const badSackNumber = (Math.random() * n).toFixed(0);
    
    for(let i = 0; i < n; i++) {
        let weight = (i == badSackNumber) ? BAD : GOOD;
        let sack = { weight };
        sacks.push(sack);
    }
    
    return sacks;
}

function getSackNumber(sacks) {
    let perfect = sacks.reduce((base, sack, i) => base + GOOD/(i+1), 0);
    let real = sacks.reduce((base, sack, i) => base + sack.weight/(i+1), 0);
    
    let number = Math.round((GOOD - BAD) / (perfect - real));
    return number;
}

let sacks = createNSacks(78);
console.table(sacks);
console.table(getSackNumber(sacks)); // answer = index in array + 1
