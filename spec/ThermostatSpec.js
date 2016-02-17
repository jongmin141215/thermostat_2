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

});



// describe("Player", function() {
//   var player;
//   var song;
//
//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });
//
//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);
//
//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });
//
//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });
//
//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();
//
//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });
//
//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });
//
//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');
//
//     player.play(song);
//     player.makeFavorite();
//
//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });
//
//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);
//
//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
