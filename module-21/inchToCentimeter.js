// inch to centy meter 
function inchesToCm(inch) {
    const centiMeter = inch * 2.54;
    return centiMeter;
} 
const CM58 = inchesToCm(58);
console.log(CM58);

// centemeter to inches

function cmToInch(cm) {
    const inches = cm / 2.54;
    return inches;
}
const cm165 = cmToInch(193);
console.log(cm165);