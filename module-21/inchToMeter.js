function inchToMeter(inch) {
    const Meter = inch * 39.37;
    return Meter;
}
const meter3 = inchToMeter(3);
console.log(meter3);

// Meter to inch

function meterToInch(meter) {
    const inches = meter / 39.37;
    return inches;
}
const inches450m = meterToInch(450);
console.log(inches450m);