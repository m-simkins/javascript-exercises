const convertToCelsius = function(tempF) {
  let tempC = Math.round(((tempF - 32) / 1.8) * 10) / 10;
  return tempC
}

const convertToFahrenheit = function(tempC) {
  let tempF = Math.round((tempC * 1.8 + 32) * 10) / 10;
  return tempF;
}

convertToCelsius(32);
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
