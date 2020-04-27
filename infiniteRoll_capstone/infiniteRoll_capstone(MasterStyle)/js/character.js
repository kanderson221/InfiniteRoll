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

if (race === "Dwarf" || race === "dwarf") {
	dwarfBonus = 1;
} else if (race === "Elf" || race === "elf") {
	elfBonus = 1;
} else if (race === "Human" || race === "human") {
	humanBonus = 1;
}

var strength = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + dwarfBonus;
var dexterity = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + humanBonus;
var constitution = Math.floor(Math.random() * Math.floor(3, 6)) + 1;
var intelligence = Math.floor(Math.random() * Math.floor(3, 6)) + 1;
var wisdom = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + elfBonus;
var charisma = Math.floor(Math.random() * Math.floor(3, 6)) + 1;

document.getElementById("strength").textContent = strength;
document.getElementById("dexterity").textContent = dexterity;
document.getElementById("constitution").textContent = constitution;
document.getElementById("intelligence").textContent = intelligence;
document.getElementById("wisdom").textContent = wisdom;
document.getElementById("charisma").textContent = charisma;

document.getElementById("name").textContent = name;
document.getElementById("race").textContent = race;

if (className === "Wizard" || className === "wizard") {
	rollOne = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollTwo = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollThree = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollFour = Math.floor(Math.random() * Math.floor(6)) + 1;
	
	var hpTotal = rollOne + rollTwo + rollThree + rollFour;
	
} else if (className === "Fighter" || className === "fighter" || className === "Paladin" || className === "paladin") {
	rollOne = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollTwo = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollThree = Math.floor(Math.random() * Math.floor(6)) + 1;
	rollFour = Math.floor(Math.random() * Math.floor(6)) + 1;
	
	var hpTotal = rollOne + rollTwo + rollThree + rollFour;
	
} 


document.getElementById("hp").textContent = hpTotal;



























