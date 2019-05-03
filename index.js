function lowerCaseDrivers(arr) {
  return arr.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function(driver) {
    const driverFirst = driver.split(" ")[0];
    const driverLast = driver.split(" ")[1];
    
    return { firstName: driverFirst, lastNamer: driverLast };
  });
}