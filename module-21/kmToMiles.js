/* John is webdeveloper , and he cycles to work . He knows the distancee between his housse and his office in miles . John wants to measure the distance in kilometers. Calculate the distance in km. 
km = 1.60934*miles. */

function milesToKm(miles) {
    kiloMeter = miles * 1.60934;
    return kiloMeter;
}
const miles3 = milesToKm(3);
console.log(miles3);
