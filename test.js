const mixed = [10,4,'c',6,'a',4];
const newArray = [];

for (let i = 0; i < mixed.length; i++) {
    const current = mixed[i];
    if (typeof current !== 'string')
        newArray.push(current);
}

console.log(newArray);
// exptected output = [10,4]
