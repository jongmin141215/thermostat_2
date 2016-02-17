var thermostat = new Thermostat();
thermostat.showTemp = function() {
  $('#temperature').text(thermostat.temp);
};
$(function() {
  thermostat.showTemp();

  $('#up').click(function() {
    thermostat.increaseTemp();
    thermostat.showTemp();
  });

  $('#down').click(function() {
    thermostat.decreaseTemp();
    thermostat.showTemp();
  });

  $('#reset').click(function() {
    thermostat.reset();
    thermostat.showTemp();
  });

  $('#powerSaving').click(function() {
    thermostat.powerSavingToggle();
    thermostat.showTemp();
  });
});
