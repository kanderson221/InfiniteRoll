var name = prompt("What is your character's name?");

while (name === "") {

  name = prompt("Please enter a name.");    

}

var race = prompt("What is your character's race? (Dwarf, Elf, Human)");

while (race === "") {

  var race = prompt("Please enter one of these races: Dwarf, Elf, Human");

}

while (race != "Dwarf" && race != "dwarf" && race != "Elf" && race != "elf" && race != "Human" && race != "human") {
  var race = prompt("Please enter one of these races: Dwarf, Elf, Human");
}

var className = prompt("What is your character's class? (Wizard, Fighter, Paladin)");

while (className === "") {
  var className = prompt("Please enter one of these classes: Wizard, Fighter, Paladin")
  }

while (className != "Wizard" && className != "wizard" && className != "Fighter" && className != "fighter" && className != "Paladin" && className != "paladin") {
  var className = prompt("Please enter one of these classes: Wizard, Fighter, Paladin")
  }

var rollOne = 0;
var rollTwo = 0;
var rollThree = 0;
var rollFour = 0;

var dwarfBonus = 0;
var elfBonus = 0;
var humanBonus = 0;

var hpTotal = 0;
var magicItemsAtStart = 0;
var goldAtStart = 0;

if (race === "Dwarf" || race === "dwarf") {
  dwarfBonus = 1;
} else if (race === "Elf" || race === "elf") {
  elfBonus = 1;
} else if (race === "Human" || race === "human") {
  humanBonus = 1;
}

//For each die
//Math.floor(Math.random() * (Max - Min + 1) + Min)
//Add three of the above together, then add the bonus
var strength = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + dwarfBonus;

var dexterity = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + humanBonus;

var constitution = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1);

var intelligence = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1);

var wisdom = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + elfBonus;

var charisma = Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1) + Math.floor(Math.random() * (6) + 1);

if (constitution <= 10) {
  var conHPBoost = 0;
} else if (constitution <= 12) {
  var conHPBoost = 1;
} else if (constitution <= 14) {
  var conHPBoost = 2;
} else if (constitution <= 16) {
  var conHPBoost = 3;
} else if (constitution <= 18){
  var conHPBoost = 4;
}

document.getElementById("strength").innerHTML = strength;
document.getElementById("dexterity").innerHTML = dexterity;
document.getElementById("constitution").innerHTML = constitution;
document.getElementById("intelligence").innerHTML = intelligence;
document.getElementById("wisdom").innerHTML = wisdom;
document.getElementById("charisma").innerHTML = charisma;

document.getElementById("name").innerHTML = name;
document.getElementById("race").innerHTML = race;

if (className === "Wizard" || className === "wizard") {
  rollOne = Math.floor(Math.random() * (6) + 1);
  rollTwo = Math.floor(Math.random() * (6) + 1);
  rollThree = Math.floor(Math.random() * (6) + 1);
  rollFour = Math.floor(Math.random() * (6) + 1);

  hpTotal = rollOne + rollTwo + rollThree + rollFour + (conHPBoost * 4);
  magicItemsAtStart = 1;
  goldAtStart = 20;


} else if (className === "Fighter" || className === "fighter") {
  rollOne = Math.floor(Math.random() * (8) + 1);
  rollTwo = Math.floor(Math.random() * (8) + 1);
  rollThree = Math.floor(Math.random() * (8) + 1);
  rollFour = Math.floor(Math.random() * (8) + 1);

  hpTotal = rollOne + rollTwo + rollThree + rollFour + (conHPBoost * 4);
  goldAtStart = 100;

} else if (className === "Paladin" || className === "paladin") {
  rollOne = Math.floor(Math.random() * (10) + 1);
  rollTwo = Math.floor(Math.random() * (10) + 1);
  rollThree = Math.floor(Math.random() * (10) + 1);
  rollFour = Math.floor(Math.random() * (10) + 1);

  hpTotal = rollOne + rollTwo + rollThree + rollFour + (conHPBoost * 4);
  goldAtStart = 50;
}

document.getElementById("class").innerHTML = className;
document.getElementById("hp").innerHTML = hpTotal;
document.getElementById("magicItems").innerHTML = magicItemsAtStart;
document.getElementById("gold").innerHTML = goldAtStart;



























