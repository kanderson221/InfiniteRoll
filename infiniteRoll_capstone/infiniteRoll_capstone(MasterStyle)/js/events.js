var eventID = 0;
var copperPieces = 0;
var silverPieces = 0;
var goldPieces = 0;

document.getElementById("copper").innerHTML = copperPieces;
document.getElementById("silver").innerHTML = silverPieces;
document.getElementById("gold").innerHTML = goldPieces;

function generateEvent() {
  eventID = Math.round(Math.random() * 50);
  
  alert(eventID);
  
  switch (eventID) {
    case 1:
      document.getElementById("eventLog").innerHTML = "Player finds two copper piece";
      
      copperPieces += 2;
      
      //Conversion Rates
      if (copperPieces >= 10) {
        silverPieces += 1;
        copperPieces -= 10;
      }
      if (silverPieces >= 10) {
        goldPieces += 1;
        silverPieces -= 10;
      }
      
      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
      break;
      
    case 2:
      //Prevent losing money when broke
      if (copperPieces == 0 && silverPieces == 0 && goldPieces == 0) {
        document.getElementById("eventLog").innerHTML = "Player has a nice walk with their empty coinpurse";
      }
      //Else the character can lose their money MWAHAHA
      else {
        document.getElementById("eventLog").innerHTML = "Player loses one copper piece";
        //If the character has silver and no copper
        if (copperPieces == 0 && silverPieces > 0) {
          
          silverPieces -= 1;
          copperPieces += 9;
          
        }
        //If character has just gold
        else if (copperPieces == 0 && silverPieces == 0 && goldPieces > 0) {
          
          goldPieces -= 1;
          silverPieces += 9;
          copperPieces += 9;
          
        }
        //Character has copper to lose
        else {
          copperPieces -= 1;
        }
      }
      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
      break;
      
    case 3:
      var randomNumber = Math.round(Math.random() * 250)
      
      document.getElementById("eventLog").innerHTML = "Player finds a large sack containing" + randomNumber + " gold pieces. What luck!";
      
      goldPieces += randomNumber;
      
      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
      break;
      
    case 4:
      document.getElementById("eventLog").innerHTML = "You encounter a merchant: Chester the Generous";
      
      //Insert Chester's picture in the picture slot
      
      
      //Create the shop buttons
      
      
      break;
      
    case 5:
      document.getElementById("eventLog").innerHTML = "C";
      break;
      
    case 6:
      document.getElementById("eventLog").innerHTML = "D";
      break;
      
    case 7:
      document.getElementById("eventLog").innerHTML = "E";
      break;
      
    case 8:
      document.getElementById("eventLog").innerHTML = "F";
      break;
      
    case 9:
      document.getElementById("eventLog").innerHTML = "G";
      break;
      
    case 10:
      document.getElementById("eventLog").innerHTML = "H";
      break;
      
    case 11:
      document.getElementById("eventLog").innerHTML = "I";
      break;
      
    case 12:
      document.getElementById("eventLog").innerHTML = "J";
      break;
      
    case 13:
      document.getElementById("eventLog").innerHTML = "K";
      break;
      
    case 14:
      document.getElementById("eventLog").innerHTML = "L";
      break;
      
    case 15:
      document.getElementById("eventLog").innerHTML = "M";
      break;
      
    case 16:
      document.getElementById("eventLog").innerHTML = "N";
      break;
      
    case 17:
      document.getElementById("eventLog").innerHTML = "O";
      break;
      
    case 18:
      document.getElementById("eventLog").innerHTML = "P";
      break;
      
    case 19:
      document.getElementById("eventLog").innerHTML = "Q";
      break;
      
    case 20:
      document.getElementById("eventLog").innerHTML = "R";
      break;
      
    case 21:
      document.getElementById("eventLog").innerHTML = "S";
      break;
      
    case 22:
      document.getElementById("eventLog").innerHTML = "T";
      break;
      
    case 23:
      document.getElementById("eventLog").innerHTML = "U";
      break;
      
    case 24:
      document.getElementById("eventLog").innerHTML = "V";
      break;
    
    case 25:
      document.getElementById("eventLog").innerHTML = "W";
      break;
      
    case 26:
      document.getElementById("eventLog").innerHTML = "X";
      break;
      
    case 27:
      document.getElementById("eventLog").innerHTML = "Y";
      break;
      
    case 28:
      document.getElementById("eventLog").innerHTML = "Z";
      break;
      
    case 29:
      document.getElementById("eventLog").innerHTML = "B";
      break;
      
    case 30:
      document.getElementById("eventLog").innerHTML = "C";
      break;
      
    case 31:
      document.getElementById("eventLog").innerHTML = "D";
      break;
      
    case 32:
      document.getElementById("eventLog").innerHTML = "E";
      break;
      
    case 33:
      document.getElementById("eventLog").innerHTML = "F";
      break;
      
    case 34:
      document.getElementById("eventLog").innerHTML = "G";
      break;
      
    case 35:
      document.getElementById("eventLog").innerHTML = "H";
      break;
      
    case 36:
      document.getElementById("eventLog").innerHTML = "I";
      break;
      
    case 37:
      document.getElementById("eventLog").innerHTML = "J";
      break;
      
    case 38:
      document.getElementById("eventLog").innerHTML = "K";
      break;
      
    case 39:
      document.getElementById("eventLog").innerHTML = "L";
      break;
      
    case 40:
      document.getElementById("eventLog").innerHTML = "M";
      break;
      
    case 41:
      document.getElementById("eventLog").innerHTML = "N";
      break;
      
    case 42:
      document.getElementById("eventLog").innerHTML = "O";
      break;
      
    case 43:
      document.getElementById("eventLog").innerHTML = "P";
      break;
      
    case 44:
      document.getElementById("eventLog").innerHTML = "Q";
      break;
      
    case 45:
      document.getElementById("eventLog").innerHTML = "R";
      break;
      
    case 46:
      document.getElementById("eventLog").innerHTML = "S";
      break;
      
    case 47:
      document.getElementById("eventLog").innerHTML = "T";
      break;
      
    case 48:
      document.getElementById("eventLog").innerHTML = "U";
      break;
      
    case 49:
      document.getElementById("eventLog").innerHTML = "V";
      break;
    
    case 50:
      document.getElementById("eventLog").innerHTML = "Steve has determined you are now worth hsi time. May he have mercy on your soul...";
      
      //Insert the Steve picture into the enemy slot
      
      
      break;
           
    default:
      document.getElementById("eventLog").innerHTML = "Player finds one Copper piece";
      copperPieces = copperPieces + 1;
      if (copperPieces >= 10) {
        silverPieces = silverPieces + 1;
        copperPieces = copperPieces - 10;
      }
      if (silverPieces >= 10) {
        goldPieces = goldPieces + 1;
        silverPieces = silverPieces - 10;
      }
      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
  }
}