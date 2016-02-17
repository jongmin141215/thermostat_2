function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSavingOn = true;

};
Thermostat.prototype.increaseTemp = function() {
  this.temp ++
};
Thermostat.prototype.decreaseTemp = function() {
  if (this.temp > 10) {
    this.temp --
  }
};
Thermostat.prototype.powerSavingToggle = function() {
  if (this.powerSavingOn === true) {
    this.powerSavingOn = false;
    this.maxTemp = 32;
  } else {
    this.powerSavingOn = true;
    this.maxTemp = 25;
  }
};
Thermostat.prototype.reset = function() {
  this.temp = 20;
};
Thermostat.prototype.energySaving = function() {
  if (this.temp < 18) {
    return 'green';
  } else if (this.temp >= 25) {
    return 'red';
  } else {
    return 'yellow';
  }
};
