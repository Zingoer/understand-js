// Create an object using bracket and dot notation that represents the characters and related data you may find in a game of Clue
var game = {};

game.murderer = "??";

var xiaoxi = {};
var occupation = "Developer";

xiaoxi.name = "Xiaoxi";
xiaoxi["occupation"] = occupation;

var yiyi = {
  name: "Yiyi",
  occupation: occupation
};

var kitchen = {};
kitchen.name = "Kitchen";
kitchen["floor"] = 1;

var gun = {};
gun.color = "black";
gun.name = "Gun";

var characters = [xiaoxi, yiyi];
var rooms = [kitchen];
var weapons = [];
weapons.push(gun);

game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "dinning" },
  { type: "dish soap", location: "baseroom" }
];

game.name = [];
game.name[0] = "Miss Scarlet";
game.name.push("Mr Green");
