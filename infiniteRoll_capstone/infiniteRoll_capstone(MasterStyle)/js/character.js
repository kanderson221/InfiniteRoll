var name = prompt("What is your character's name?");

 while (name === "") {
		
  name = prompt("Reminder: Please enter your name:");    
				
}

var race = prompt("What is your character's race? (Dwarf, Elf, Human)");

while (race === "") {
	
	var race = prompt("What is your character's race?");
	
}

var dwarfBonus = 0;
var elfBonus = 0;
var humanBonus = 0;

if (race === "Dwarf" || race === "dwarf") {
	dwarfBonus = 1;
} else if (race === "Elf" || race === "elf") {
	elfBonus = 1;
} else if (humanBonus === "Human" || race === "human") {
	humanBonus = 1;
}

var strength = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + dwarfBonus;
var dexterity = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + humanBonus;
var constitution = Math.floor(Math.random() * Math.floor(3, 6)) + 1;
var intelligence = Math.floor(Math.random() * Math.floor(3, 6)) + 1;
var wisdom = Math.floor(Math.random() * Math.floor(3, 6)) + 1 + elfBonus;
var charisma = Math.floor(Math.random() * Math.floor(3, 6)) + 1;

document.getElementById("strength").textContent = "Strength: " + strength;
document.getElementById("dexterity").textContent = "Dexterity: " + dexterity;
document.getElementById("constitution").textContent = "Constitution: " + constitution;
document.getElementById("intelligence").textContent = "Intelligence: " + intelligence;
document.getElementById("wisdom").textContent = "Wisdom: " + wisdom;
document.getElementById("charisma").textContent = "Charisma: " + charisma;

document.getElementById("name").textContent = "Name: " + name;
document.getElementById("race").textContent = "Race: " + race;



























