var eventID = 0;
var copperPieces = 0;
var silverPieces = 0;
var goldPieces = 0;
var piecesOfEight = 0;
var magicItems = 0;
var monsterParts = 0;

var playerDamageBoostMystical = 0;
var playerToHitBoost = 0;

var eventLog = "";

document.getElementById("copper").innerHTML = copperPieces;
document.getElementById("silver").innerHTML = silverPieces;
document.getElementById("gold").innerHTML = goldPieces;
document.getElementById("magicItems").innerHTML = magicItems;
document.getElementById("pOE").innerHTML = piecesOfEight;
document.getElementById("monsterParts").innerHTML = monsterParts;

function generateEvent() {
  //Changed to math.floor for uniform distribution
  // the +1 makes the min and max inclusive
  //Math.floor(Math.random() * (Max - Min + 1) + Min)
  eventID = Math.floor(Math.random() * (50 - 1 + 1));

  //alert(eventID);

  //Clear the detailRow div
  document.getElementById("detailRow").textContent = "";

  switch (eventID) {
    case 1: //////////////////////////////////////////////////////////////////////////////////////////////
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
      
      eventLog += 
      
      break;

    case 2: ///////////////////////////////////////////////////////////////////////////////////////////////////
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

    case 3: //////////////////////////////////////////////////////////////////////////////////////
      var randomNumber = Math.floor(Math.random() * (250 + 1));

      document.getElementById("eventLog").innerHTML = "Player finds a large sack containing " + randomNumber + " gold pieces. What luck!";

      goldPieces += randomNumber;

      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
      break;

    case 4: ////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You encounter a merchant: Chester the Frugile";

      //Insert Chester's picture in the picture slot
      document.getElementById("enemyImage").attributes.src = "images/chester.jpg";

      //Create money amounts for shop items
      //Math.floor(Math.random() * (Max - Min + 1) + Min)
      var itemPrice1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
      var itemPrice2 = Math.floor(Math.random() * (250 - 100 + 1) + 100);
      var itemPrice3 = Math.floor(Math.random() * (500 - 250 + 1) + 250);
      
      var sellPrice = Math.floor(Math.random() * (100 - 5 + 1) + 5);

      //Create the shop buttons
      var shopBtn1 = document.createElement("BUTTON");
      var shopBtn2 = document.createElement("BUTTON");
      var shopBtn3 = document.createElement("BUTTON");
      var sellBtn = document.createElement("BUTTON");
      var lineBreak = document.createElement("br");
      
      shopBtn1.textContent = "Heal Character for: " + itemPrice1 + " gold";
      shopBtn2.textContent = "Sharpen Weapon for: " + itemPrice2 + " gold";
      shopBtn3.textContent = "Magic Item for: " + itemPrice3 + " gold";
      
      sellBtn.textContent = "Sell monster part for: " + sellPrice + " gold";

      //Add event listeners for buttons
      shopBtn1.addEventListener("click", function(){
        
      });
      shopBtn2.addEventListener("click", function(){
        
      });
      shopBtn3.addEventListener("click", function(){
        
      });
      sellBtn.addEventListener("click", function(){
        
      });

      document.getElementById("detailRow").appendChild(shopBtn1);
      document.getElementById("detailRow").appendChild(shopBtn2);
      document.getElementById("detailRow").appendChild(shopBtn3);
      document.getElementById("detailRow").appendChild(lineBreak);
      document.getElementById("detailRow").appendChild(sellBtn);

      break;

    case 5: //////////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You encounter a merchant: Chester the Generous<br>\n" + lineBreak;
      
      //Insert Chester's picture in the picture slot
      document.getElementById("enemyImage").attributes.src = "images/chester.jpg";
      
      //Chester will give the player either gold or a magic item
      var randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      
      //1-7 gives gold, 8-10 gives magic item
      if (randNum < 8) {
        //Give player gold
        randGold = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        goldPieces += randGold;
        document.getElementById("eventLog").innerHTML += "Chester the Generous gives you " + randGold + " gold pieces for your bravery.";
        
      } else {
        //Give player magic Item
        magicItems += 1;
        playerDamageBoostMystical += 1;
        
      }
      
      document.getElementById("copper").innerHTML = copperPieces;
      document.getElementById("silver").innerHTML = silverPieces;
      document.getElementById("gold").innerHTML = goldPieces;
      document.getElementById("magicItems").innerHTML = magicItems;
      
      break;

    case 6: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You find a Piece Of Eight<br>\n" + lineBreak;
      
      piecesOfEight += 1;
      
      if (piecesOfEight >= 8) {
        document.getElementById("eventLog").innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...";
        
        piecesOfEight -= 8;
        playerDamageBoostMystical += 5;
        
      }
      
      document.getElementById("pOE").innerHTML = piecesOfEight;
      
      break;

    case 7: /////////////////////////////////////////////////////////////////////////////////////////////////
			// Kyle
      document.getElementById("eventLog").innerHTML = "E";
      break;

    case 8: /////////////////////////////////////////////////////////////////////////////////////////////////
			// Kyle
      document.getElementById("eventLog").innerHTML = "F";
      break;

    case 9: /////////////////////////////////////////////////////////////////////////////////////////////////
			// Kyle
      document.getElementById("eventLog").innerHTML = "G";
      break;

    case 10: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "H";
      break;

    case 11: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "I";
      break;

    case 12: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "J";
      break;

    case 13: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "K";
      break;

    case 14: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "L";
      break;

    case 15: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "M";
      break;

    case 16: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "N";
      break;

    case 17: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "O";
      break;

    case 18: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "P";
      break;

    case 19: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "Q";
      break;

    case 20: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "R";
      break;

    case 21: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "S";
      break;

    case 22: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "T";
      break;

    case 23: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "U";
      break;

    case 24: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "V";
      break;

    case 25: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "W";
      break;

    case 26: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "X";
      break;

    case 27: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "Y";
      break;

    case 28: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "Z";
      break;

    case 29: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "B";
      break;

    case 30: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "C";
      break;

    case 31: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "D";
      break;

    case 32: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "E";
      break;

    case 33: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "F";
      break;

    case 34: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "G";
      break;

    case 35: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "H";
      break;

    case 36: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "I";
      break;

    case 37: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "J";
      break;

    case 38: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "K";
      break;

    case 39: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "L";
      break;

    case 40: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "M";
      break;

    case 41: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "N";
      break;

    case 42: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "O";
      break;

    case 43: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "P";
      break;

    case 44: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "Q";
      break;

    case 45: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "R";
      break;

    case 46: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "S";
      break;

    case 47: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "T";
      break;

    case 48: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "U";
      break;

    case 49: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "V";
      break;

    case 50: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "Steve has determined you are now worth his time. May he have mercy on your soul...";

      //Insert the Steve picture into the enemy slot
      
      
      //Load stats
      
      
      //Commence combat


      break;

    //This should not trigger, but we have it just in case
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
};