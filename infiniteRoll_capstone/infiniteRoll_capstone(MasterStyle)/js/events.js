var eventID = 0;
var goldPieces = parseInt(document.getElementById("gold").innerHTML);
var piecesOfEight = 0;
var magicItems = document.getElementById("magicItems").innerHTML;
var monsterParts = 0;
var messagesFromSteve = 0;

if (magicItems != 0) {
  var playerDamageBoostMystical = magicItems;
} else {
  var playerDamageBoostMystical = 0;
}

var playerMaxHealth = document.getElementById("hp").innerHTML;
var playerCurrentHealth = playerMaxHealth;

var eventLog = "You begin your journey through a strange land";

var eventLogHTML = document.getElementById("eventLog");
var goldHTML = document.getElementById("gold");
var magicItemHTML = document.getElementById("magicItems");
var piecesOfEightHTML = document.getElementById("pOE");
var monsterPartsHTML = document.getElementById("monsterParts");

var enemyNameHTML = document.getElementById("enemyName");
var enemyImageHTML = document.getElementById("enemyImage");
var enemyHpHTML = document.getElementById("enemyHp");
var enemyStrHTML = document.getElementById("enemyStr");
var enemyDexHTML = document.getElementById("enemyDex");
var enemyConHTML = document.getElementById("enemyCon");
var enemyIntHTML = document.getElementById("enemyInt");
var enemyWisHTML = document.getElementById("enemyWis");
var enemyChrHTML = document.getElementById("enemyChr");

document.getElementById("eventLog").innerHTML = eventLog;
document.getElementById("gold").innerHTML = goldPieces;
document.getElementById("magicItems").innerHTML = magicItems;
document.getElementById("pOE").innerHTML = piecesOfEight;
document.getElementById("monsterParts").innerHTML = monsterParts;

function generateEvent() {
  //Changed to math.floor for uniform distribution
  // the +1 makes the min and max inclusive
  //Math.floor(Math.random() * (Max - Min + 1) + Min)
  eventID = Math.floor(Math.random() * (50) + 1);

  //alert(eventID);

  //Clear the fields
  document.getElementById("enemyName").innerHTML = "";
  document.getElementById("enemyHp").innerHTML = "";
  document.getElementById("enemyImage").attributes.src = "images/circle.png";
  document.getElementById("enemyStr").innerHTML = "";
  document.getElementById("enemyDex").innerHTML = "";
  document.getElementById("enemyCon").innerHTML = "";
  document.getElementById("enemyInt").innerHTML = "";
  document.getElementById("enemyWis").innerHTML = "";
  document.getElementById("enemyChr").innerHTML = "";

  //Clear the detailRow div
  document.getElementById("detailRow").innerHTML = "";

  switch (eventID) {
    case 1: //////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You find two gold pieces<br><br>" + eventLog;

      goldPieces += 2;

      document.getElementById("gold").innerHTML = goldPieces;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 2: ///////////////////////////////////////////////////////////////////////////////////////////////////
      //Prevent losing money when broke
      if (goldPieces == 0) {
        document.getElementById("eventLog").innerHTML = "You have a nice walk with your empty coinpurse<br><br>" + eventLog;
      }
      //Else the character can lose their money MWAHAHA
      else {
        document.getElementById("eventLog").innerHTML = "You lose one gold piece<br><br>" + eventLog;

        goldPieces -= 1;
      }

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("gold").innerHTML = goldPieces;
      break;

    case 3: //////////////////////////////////////////////////////////////////////////////////////
      var randomNumber = Math.floor(Math.random() * (250) + 1);

      document.getElementById("eventLog").innerHTML = "You find a large sack containing " + randomNumber + " gold pieces. What luck!<br><br>" + eventLog;

      goldPieces += randomNumber;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("gold").innerHTML = goldPieces;
      break;

    case 4: ////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("rollButton").disabled = true;
      
      document.getElementById("eventLog").innerHTML = "You encounter a merchant: Chester the Frugile<br><br>" + eventLog;

      //Insert Chester's picture in the picture slot
      document.getElementById("enemyImage").src = "images/chester.jpg";
      document.getElementById("enemyName").innerHTML = "Chester";

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
      
      //var lineBreak = document.createElement("br");

      
      var closeBtn = document.createElement("BUTTON");
      
      shopBtn1.setAttribute("class", "inPopOut");
      shopBtn2.setAttribute("class", "inPopOut");
      shopBtn3.setAttribute("class", "inPopOut");
      sellBtn.setAttribute("class", "inPopOut");
      closeBtn.setAttribute("class", "inPopOut");
      
      shopBtn1.textContent = "Heal Character for: " + itemPrice1 + " gold";
      shopBtn2.textContent = "Sharpen Weapon for: " + itemPrice2 + " gold";
      shopBtn3.textContent = "Magic Item for: " + itemPrice3 + " gold";

      sellBtn.textContent = "Sell monster part for: " + sellPrice + " gold";

      
      closeBtn.textContent = "Leave Chester";
      
      
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      //Add event listeners for buttons
      
      //Heal Button
      shopBtn1.addEventListener("click", function(){
        if (playerCurrentHealth < playerMaxHealth) {
          if (goldPieces >= itemPrice1) {
            playerCurrentHealth += 10;
            goldPieces -= itemPrice1;

            if (playerCurrentHealth > playerMaxHealth) {
              playerCurrentHealth = playerMaxHealth;
            }

            document.getElementById("eventLog").innerHTML = "You healed yourself at Chester's shop.<br><br>" + eventLog;

            //Add to total log
            eventLog = document.getElementById("eventLog").innerHTML

            document.getElementById("gold").innerHTML = goldPieces;
            document.getElementById("hp").innerHTML = playerCurrentHealth;
          }
        }
      });

      //Sharpen Button
      shopBtn2.addEventListener("click", function(){
        if (goldPieces >= itemPrice2) {
          playerToHitBoost += 1;
          goldPieces -= itemPrice2;

          document.getElementById("eventLog").innerHTML = "You sharpened your sword. It should be easier to hit monsters now.<br><br>" + eventLog;

          //Add to total log
          eventLog = document.getElementById("eventLog").innerHTML

          document.getElementById("gold").innerHTML = goldPieces;
        }
      });

      //Magic Item Button
      shopBtn3.addEventListener("click", function(){
        if (goldPieces >= itemPrice3) {
          magicItems += 1;
          playerDamageBoostMystical += 1;
          goldPieces -= itemPrice3;

          document.getElementById("eventLog").innerHTML = "You bought a magic item. You feel stronger now.<br><br>" + eventLog;

          //Add to total log
          eventLog = document.getElementById("eventLog").innerHTML

          document.getElementById("gold").innerHTML = goldPieces;
          document.getElementById("magicItems").innerHTML = magicItems;
        }
      });

      //Sell Button
      sellBtn.addEventListener("click", function(){
        if (monsterParts > 0) {
          monsterParts -= 1;
          goldPieces += sellPrice;

          document.getElementById("eventLog").innerHTML = "You sold a monster part for gold.<br><br>" + eventLog;

          //Add to total log
          eventLog = document.getElementById("eventLog").innerHTML

          document.getElementById("gold").innerHTML = goldPieces;
          document.getElementById("monsterParts").innerHTML = monsterParts;
        }
      });
      
      closeBtn.addEventListener("click", function(){
        document.getElementById("rollButton").disabled = false;
        document.getElementById("detailRow").style.width = "0px";
        generateEvent();
      })
      
      document.getElementById("detailRow").style.width = "34%";
      
      document.getElementById("detailRow").appendChild(shopBtn1);
      document.getElementById("detailRow").appendChild(shopBtn2);
      document.getElementById("detailRow").appendChild(shopBtn3);
      //document.getElementById("detailRow").appendChild(lineBreak);
      document.getElementById("detailRow").appendChild(sellBtn);
      document.getElementById("detailRow").appendChild(closeBtn);

      break;

    case 5: //////////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You encounter a merchant: Chester the Generous<br><br>";

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      //Insert Chester's picture in the picture slot
      document.getElementById("enemyImage").src = "images/chester.jpg";
      document.getElementById("enemyName").innerHTML = "Chester";

      //Chester will give the player either gold or a magic item
      var randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      //1-7 gives gold, 8-10 gives magic item
      if (randNum < 8) {
        //Give player gold
        randGold = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        goldPieces += randGold;
        document.getElementById("eventLog").innerHTML += "Chester the Generous gives you " + randGold + " gold pieces for your bravery.<br><br>";

      } else {
        //Give player magic Item
        magicItems += 1;
        playerDamageBoostMystical += 1;

        document.getElementById("eventLog").innerHTML += "Chester the Generous gives you a magical item for your bravery.<br><br>";

      }
      
      //Possibly a problem
      document.getElementById("eventLog").innerHTML += eventLog;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("gold").innerHTML = goldPieces;
      document.getElementById("magicItems").innerHTML = magicItems;

      break;

    case 6: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You find a Piece of Eight<br><br>";

      piecesOfEight += 1;

      if (piecesOfEight >= 8) {
        document.getElementById("eventLog").innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

        piecesOfEight -= 8;
        playerDamageBoostMystical += 5;

      }

      document.getElementById("eventLog").innerHTML += eventLog;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("pOE").innerHTML = piecesOfEight;

      break;

    case 7: /////////////////////////////////////////////////////////////////////////////////////////////////
      // Kyle
      document.getElementById("eventLog").innerHTML = "He is an ent, he speaks for the trees. The ent has come to break your knees.<br><br>" + eventLog;

      //Insert the picture into the enemy slot


      //Load stats
      document.getElementById("enemyName").innerHTML = "Ent";
      document.getElementById("enemyHp").innerHTML = "200";
      document.getElementById("enemyStr").innerHTML = "15";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "3";
      document.getElementById("enemyInt").innerHTML = "11";
      document.getElementById("enemyWis").innerHTML = "9";
      document.getElementById("enemyChr").innerHTML = "6";


      //Commence combat


      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML


      break;

    case 8: /////////////////////////////////////////////////////////////////////////////////////////////////
      // Kyle
      document.getElementById("eventLog").innerHTML = "A highway bandit jumps out to attack you!<br><br>" + eventLog;

      //Insert the picture into the enemy slot


      //Load stats
      document.getElementById("enemyName").innerHTML = "Bandit";
      document.getElementById("enemyHp").innerHTML = "42";
      document.getElementById("enemyStr").innerHTML = "10";
      document.getElementById("enemyDex").innerHTML = "13";
      document.getElementById("enemyCon").innerHTML = "16";
      document.getElementById("enemyInt").innerHTML = "9";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "10";


      //Commence combat


      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML


      break;

    case 9: /////////////////////////////////////////////////////////////////////////////////////////////////
      // Kyle
      document.getElementById("eventLog").innerHTML = "You have come across an ice fox! Brrrrrilliant!<br><br>" + eventLog;

      //Insert the picture into the enemy slot


      //Load stats
      document.getElementById("enemyName").innerHTML = "Ice Fox";
      document.getElementById("enemyHp").innerHTML = "40";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "15";
      document.getElementById("enemyCon").innerHTML = "10";
      document.getElementById("enemyInt").innerHTML = "9";
      document.getElementById("enemyWis").innerHTML = "6";
      document.getElementById("enemyChr").innerHTML = "9";


      //Commence combat


      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML


      break;

    case 10: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";


      //Commence combat


      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML


      break;

    case 11: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "The goblin king has come to avenge his people!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinKing.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin King";
      document.getElementById("enemyHp").innerHTML = "38";
      document.getElementById("enemyStr").innerHTML = "16";
      document.getElementById("enemyDex").innerHTML = "12";
      document.getElementById("enemyCon").innerHTML = "18";
      document.getElementById("enemyInt").innerHTML = "10";
      document.getElementById("enemyWis").innerHTML = "10";
      document.getElementById("enemyChr").innerHTML = "12";


      //Commence combat


      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML


      break;

    case 12: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You find a magical item and 250 gold lying on a piece of parchment. When you take the items, you see the paper has a message on it. \"You are still too weak to meet me. Grow stronger and you may earn my appearance.\"<br>-S<br><br>" + eventLog;

      goldPieces += 250;
      magicItems += 1;
      messagesFromSteve += 1;

      document.getElementById("gold").innerHTML = goldPieces;
      document.getElementById("magicItems").innerHTML = magicItems;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 13: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "You trip over a healing potion. Lucky for you it lands in your mouth and uncorks itself<br><br>" + eventLog;

      if (playerCurrentHealth < playerMaxHealth) {
        playerCurrentHealth += 10;

        if (playerCurrentHealth > playerMaxHealth) {
          playerCurrentHealth = playerMaxHealth;
        }
      }

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("hp").innerHTML = playerCurrentHealth;

      break;

    case 14: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 15: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 16: /////////////////////////////////////////////////////////////////////////////////////////////////

      document.getElementById("eventLog").innerHTML = "Nothing happens!<br><br>" + eventLog;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 17: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 18: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 19: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 20: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 21: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 22: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 23: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 24: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 25: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 26: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 27: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 28: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 29: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 30: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 31: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 32: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 33: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 34: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 35: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 36: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 37: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 38: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 39: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";
      
      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 40: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 41: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 42: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 43: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 44: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 45: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 46: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 47: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 48: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";																				
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 49: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("eventLog").innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      document.getElementById("enemyImage").src = "images/goblinEnemy.jpg";

      //Load stats
      document.getElementById("enemyName").innerHTML = "Goblin";
      document.getElementById("enemyHp").innerHTML = "12";
      document.getElementById("enemyStr").innerHTML = "12";
      document.getElementById("enemyDex").innerHTML = "10";
      document.getElementById("enemyCon").innerHTML = "12";
      document.getElementById("enemyInt").innerHTML = "6";
      document.getElementById("enemyWis").innerHTML = "8";
      document.getElementById("enemyChr").innerHTML = "3";
      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

    case 50: /////////////////////////////////////////////////////////////////////////////////////////////////
      if (messagesFromSteve >= 5) {

        document.getElementById("eventLog").innerHTML = "Steve has determined you are now worth his time. May he have mercy on your soul...<br><br>" + eventLog;

        //Insert the Steve picture into the enemy slot


        //Load stats


        //Commence combat


      } else {

        document.getElementById("eventLog").innerHTML = "You see something out of the corner of your eye. When you look, you see a Piece of Eight laying on a note that says \"You are almost ready to meet me. Keep fighting, my child.\"<br>- S<br><br>";

        piecesOfEight += 1;

        if (piecesOfEight >= 8) {
          document.getElementById("eventLog").innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

          piecesOfEight -= 8;
          playerDamageBoostMystical += 5;

        }

        document.getElementById("eventLog").innerHTML += eventLog;
        document.getElementById("pOE").innerHTML = piecesOfEight;

      }

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      break;

      //This should not trigger, but we have it just in case
    default:
      document.getElementById("eventLog").innerHTML = "You find one Gold piece<br><br>" + eventLog;

      goldPieces += 1;

      //Add to total log
      eventLog = document.getElementById("eventLog").innerHTML

      document.getElementById("gold").innerHTML = goldPieces;
  }
};
