describe('Thermostst', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });

  it('can increase the temperature with the up button', function() {
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21);
  });

  it('can decrease the temperature with the down button', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19);
  });

  it('has a minimum tempature of 10 degrees', function() {
    expect(thermostat.minTemp).toEqual(10);
  });

  it('cannot go below 10 degrees', function() {
    thermostat.temp = 10;
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(10);
  });

  it('has a maximum tempature of 32 when powersaving mode is off', function() {
    thermostat.powerSavingToggle();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('has a maximum tempature of 25 when powersaving mode is on', function() {
    expect(thermostat.maxTemp).toEqual(25);
  });

  it('can be reset to 20 degrees with the reset button', function() {
    thermostat.temp = 15;
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  it('displays green when the temperature is below 18', function() {
    thermostat.temp = 17
    expect(thermostat.energySaving()).toEqual('green');
  });

  it('displays red when the temperature is greater than or equal to 25', function() {
    thermostat.temp = 25;
    expect(thermostat.energySaving()).toEqual('red');
  });

  it('displays yellow when the temperature is between 18 and 25', function() {
    thermostat.temp = 18
    expect(thermostat.energySaving()).toEqual('yellow');
    thermostat.temp = 24
    expect(thermostat.energySaving()).toEqual('yellow');
  });
});
