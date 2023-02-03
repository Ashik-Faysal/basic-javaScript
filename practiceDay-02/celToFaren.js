// Celcius to farenheight
function celToFar(celsius) {
    const farenheight = (celsius * 9 / 5) + 32;
    return farenheight;
}
const temparature = celToFar(37);
console.log(temparature);