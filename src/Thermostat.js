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
}

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
