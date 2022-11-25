const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//const totalBatteries = batteryBatches.reduce((total, value) => value + total)

let totalBatteries=batteryBatches.reduce(function (total,value){
    return total + value;
});
console.log(totalBatteries)
