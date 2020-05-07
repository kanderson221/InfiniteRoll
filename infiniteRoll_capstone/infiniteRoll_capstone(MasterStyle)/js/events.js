var eventLogHTML = document.getElementById("eventLog");
var goldHTML = document.getElementById("gold");
var magicItemsHTML = document.getElementById("magicItems");
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

var playerNameHTML = document.getElementById("name");
var playerHpHTML = document.getElementById("hp");
var playerStrHTML = document.getElementById("strength");
var playerDexHTML = document.getElementById("dexterity");
var playerConHTML = document.getElementById("constitution");
var playerIntHTML = document.getElementById("intelligence");
var playerWisHTML = document.getElementById("wisdom");
var playerChrHTML = document.getElementById("charisma");

var eventID = 0;
var goldPieces = parseInt(goldHTML.innerHTML);
var piecesOfEight = 0;
var magicItems = parseInt(magicItemsHTML.innerHTML);
var monsterParts = 0;
var messagesFromSteve = 0;
var playerToHitBoost = 0;

if (magicItems != 0) {
  var playerDamageBoostMystical = magicItems;
} else {
  var playerDamageBoostMystical = 0;
}

var playerMaxHealth = playerHpHTML.innerHTML;
var playerCurrentHealth = playerMaxHealth;

var eventLog = playerNameHTML.innerHTML + ", you have begun your journey through a strange land.";

eventLogHTML.innerHTML = eventLog;
goldHTML.innerHTML = goldPieces;
magicItemsHTML.innerHTML = magicItems;
piecesOfEightHTML.innerHTML = piecesOfEight;
monsterPartsHTML.innerHTML = monsterParts;

//Combat function /////////////////////////////////////////////////////////////////////////////////
function monsterCombat(playerHp, playerStr, playerDex, playerCon, playerInt, playerWis, playerChr, enemyHp, enemyStr, enemyDex, enemyCon, enemyInt, enemyWis, enemyChr) {

  var randomPlayerNumber = 0;
  var randomEnemyNumber = 0;

  var playerWinCount = 0;
  var enemyWinCount = 0;

  enemyHp = parseInt(enemyHp);

  //Fight based on str
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerStr)) + 1 + playerToHitBoost);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyStr)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Fight based on dex
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerDex)) + 1 + playerToHitBoost);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyDex)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Fight based on con
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerCon)) + 1);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyCon)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Fight based on int
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerInt)) + 1);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyInt)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Fight based on wis
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerWis)) + 1);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyWis)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Fight based on chr
  randomPlayerNumber = Math.floor(Math.random() * (parseInt(playerChr)) + 1);
  randomEnemyNumber = Math.floor(Math.random() * (parseInt(enemyChr)) + 1);
  if(randomPlayerNumber > randomEnemyNumber) {
    playerWinCount += 1;
  }
  else if (randomPlayerNumber < randomEnemyNumber) {
    enemyWinCount += 1;
  }
  else {
    playerWinCount +=1;
    enemyWinCount +=1;
  }

  //Deal Damage
  if (playerWinCount == 4) {
    enemyHp -= (1 + playerDamageBoostMystical);
  }
  else if (playerWinCount == 5) {
    enemyHp -= (2 + playerDamageBoostMystical);
  }
  else if (playerWinCount == 6) {
    enemyHp -= (3 + playerDamageBoostMystical);
  }
  else {
    enemyHp -= 0;
  }

  if (enemyWinCount == 4) {
    playerHp -= 1;
  }
  else if (enemyWinCount == 5) {
    playerHp -= 2;
  }
  else if (enemyWinCount == 6) {
    playerHp -= 3;
  }
  else {
    playerHp -= 0;
  }

  playerCurrentHealth = playerHp;
  playerHpHTML.innerHTML = playerCurrentHealth;

  enemyHpHTML.innerHTML = enemyHp;

  if (playerCurrentHealth <= 0 || enemyHp <= 0) {
    document.getElementById("rollButton").disabled = false;
    document.getElementById("detailRow").style.width = "0px";
    monsterParts += Math.floor(Math.random() * (5 - 1 + 1) + 1);
    generateEvent();
  }

  document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
  document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

}

//Event function //////////////////////////////////////////////////////////////////////////////////////////////////
function generateEvent() {
  //Changed to math.floor for uniform distribution
  // the +1 makes the min and max inclusive
  //Math.floor(Math.random() * (Max - Min + 1) + Min)
  eventID = Math.floor(Math.random() * (54 - 1 + 1) + 1);

  //Clear the fields
  enemyNameHTML.innerHTML = "";
  enemyHpHTML.innerHTML = "";
  enemyImageHTML.src = "images/default.png";
  enemyStrHTML.innerHTML = "";
  enemyDexHTML.innerHTML = "";
  enemyConHTML.innerHTML = "";
  enemyIntHTML.innerHTML = "";
  enemyWisHTML.innerHTML = "";
  enemyChrHTML.innerHTML = "";

  //Clear the detailRow div
  document.getElementById("detailRow").innerHTML = "<p id=\"combatLog\" class=\"inPopOut\"></p>";

  switch (eventID) {
    case 1: ///////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find two gold pieces<br><br>" + eventLog;

      goldPieces += 2;

      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 2: ///////////////////////////////////////////////////////////////////////////////////////////////////
      //Prevent losing money when broke
      if (goldPieces == 0) {
        eventLogHTML.innerHTML = "You have a nice walk with your empty coinpurse<br><br>" + eventLog;
      }
      //Else the character can lose their money MWAHAHA
      else {
        eventLogHTML.innerHTML = "You lose one gold piece<br><br>" + eventLog;

        goldPieces -= 1;
      }

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      break;

    case 3: //////////////////////////////////////////////////////////////////////////////////////
      var randomNumber = Math.floor(Math.random() * (250) + 1);

      eventLogHTML.innerHTML = "You find a large sack containing " + randomNumber + " gold pieces. What luck!<br><br>" + eventLog;

      goldPieces += randomNumber;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      break;

    case 4: ////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("rollButton").disabled = true;

      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Frugile<br><br>" + eventLog;

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

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
      eventLog = eventLogHTML.innerHTML

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

            eventLogHTML.innerHTML = "You healed yourself at Chester's shop.<br><br>" + eventLog;

            //Add to total log
            eventLog = eventLogHTML.innerHTML;

            goldHTML.innerHTML = goldPieces;
            playerHpHTML.innerHTML = playerCurrentHealth;
          }
        }
      });

      //Sharpen Button
      shopBtn2.addEventListener("click", function(){
        if (goldPieces >= itemPrice2) {
          playerToHitBoost += 1;
          goldPieces -= itemPrice2;

          eventLogHTML.innerHTML = "You sharpened your sword. It should be easier to hit monsters now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
        }
      });

      //Magic Item Button
      shopBtn3.addEventListener("click", function(){
        if (goldPieces >= itemPrice3) {
          magicItems += 1;
          playerDamageBoostMystical += 1;
          goldPieces -= itemPrice3;

          eventLogHTML.innerHTML = "You bought a magic item. You feel stronger now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
          magicItemsHTML.innerHTML = magicItems;
        }
      });

      //Sell Button
      sellBtn.addEventListener("click", function(){
        if (monsterParts > 0) {
          monsterParts -= 1;
          goldPieces += sellPrice;

          eventLogHTML.innerHTML = "You sold a monster part for gold.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
          monsterPartsHTML.innerHTML = monsterParts;
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
      document.getElementById("detailRow").appendChild(sellBtn);
      document.getElementById("detailRow").appendChild(closeBtn);

      break;

    case 5: //////////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Generous<br><br>";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

      //Chester will give the player either gold or a magic item
      var randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      //1-7 gives gold, 8-10 gives magic item
      if (randNum < 8) {
        //Give player gold
        var randGold = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        goldPieces += randGold;
        eventLogHTML.innerHTML += "Chester the Generous gives you " + randGold + " gold pieces for your bravery.<br><br>";

      } else {
        //Give player magic Item
        magicItems += 1;
        playerDamageBoostMystical += 1;

        eventLogHTML.innerHTML += "Chester the Generous gives you a magical item for your bravery.<br><br>";

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      magicItemsHTML.innerHTML = magicItems;

      break;

    case 6: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find a Piece of Eight<br><br>";

      piecesOfEight += 1;

      if (piecesOfEight >= 8) {
        eventLogHTML.innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

        piecesOfEight -= 8;
        playerDamageBoostMystical += 5;

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      piecesOfEightHTML.innerHTML = piecesOfEight;

      break;

    case 7: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "He is an ent, he speaks for the trees. The ent has come to break your knees.<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/ent.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Ent";
      enemyHpHTML.innerHTML = 200;
      enemyStrHTML.innerHTML = 15;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 3;
      enemyIntHTML.innerHTML = 11;
      enemyWisHTML.innerHTML = 9;
      enemyChrHTML.innerHTML = 6;

      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 8: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A highway bandit jumps out to attack you!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/bandit.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Bandit";
      enemyHpHTML.innerHTML = 42;
      enemyStrHTML.innerHTML = 10;
      enemyDexHTML.innerHTML = 13;
      enemyConHTML.innerHTML = 16;
      enemyIntHTML.innerHTML = 9;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 10;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 9: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You have come across an ice fox! Brrrrrilliant!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/iceFox.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Ice Fox";
      enemyHpHTML.innerHTML = 16;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 16;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 8;
      enemyWisHTML.innerHTML = 12;
      enemyChrHTML.innerHTML = 12;

      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 10: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin springs out and attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 11: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "The goblin king has come to avenge his people!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 12: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find a magical item and 250 gold lying on a piece of parchment. When you take the items, you see the paper has a message on it. \"You are still too weak to meet me. Grow stronger and you may earn my appearance.\"<br>-S<br><br>" + eventLog;

      goldPieces += 250;
      magicItems += 1;
      messagesFromSteve += 1;

      goldHTML.innerHTML = goldPieces;
      magicItemsHTML.innerHTML = magicItems;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 13: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You trip over a healing potion. Lucky for you it lands in your mouth and uncorks itself<br><br>" + eventLog;

      if (playerCurrentHealth < playerMaxHealth) {
        playerCurrentHealth += 10;

        if (playerCurrentHealth > playerMaxHealth) {
          playerCurrentHealth = playerMaxHealth;
        }
      }

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      playerHpHTML.innerHTML = playerCurrentHealth;

      break;

    case 14: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find two gold pieces<br><br>" + eventLog;

      goldPieces += 2;

      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 15: /////////////////////////////////////////////////////////////////////////////////////////////////
      //Prevent losing money when broke
      if (goldPieces == 0) {
        eventLogHTML.innerHTML = "You have a nice walk with your empty coinpurse<br><br>" + eventLog;
      }
      //Else the character can lose their money MWAHAHA
      else {
        eventLogHTML.innerHTML = "You lose one gold piece<br><br>" + eventLog;

        goldPieces -= 1;
      }

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      break;

    case 16: /////////////////////////////////////////////////////////////////////////////////////////////////

      eventLogHTML.innerHTML = "Nothing happens!<br><br>" + eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 17: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You hear some movement around the area, be careful. Someone may be watching you!<br><br>" + eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 18: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You trip and drop 3 gold from your inventory<br><br>" + eventLog;

      //Subtract the gold from the player
      goldPieces -= 3;
      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML;

      break;

    case 19: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You found a health potion!<br><br>" + eventLog;

      //Load stats
      if (playerCurrentHealth < playerMaxHealth) {

        playerCurrentHealth += 5;

        if (playerCurrentHealth > playerMaxHealth) {
          playerCurrentHealth = playerMaxHealth;
        }

        eventLogHTML.innerHTML = "You healed for 5 hp.<br><br>" + eventLog;

        //Add to total log
        eventLog = eventLogHTML.innerHTML

        playerHpHTML.innerHTML = playerCurrentHealth;

      }
      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 20: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You hear some movement around the area, be careful. Someone may be watching you!<br><br>" + eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 21: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You have encountered... Nothing!!!<br><br>" + eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 22: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You have encountered... Nothing!!!<br><br>" + eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 23: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("rollButton").disabled = true;

      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Frugile<br><br>" + eventLog;

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

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
      eventLog = eventLogHTML.innerHTML

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

            eventLogHTML.innerHTML = "You healed yourself at Chester's shop.<br><br>" + eventLog;

            //Add to total log
            eventLog = eventLogHTML.innerHTML;

            goldHTML.innerHTML = goldPieces;
            playerHpHTML.innerHTML = playerCurrentHealth;
          }
        }
      });

      //Sharpen Button
      shopBtn2.addEventListener("click", function(){
        if (goldPieces >= itemPrice2) {
          playerToHitBoost += 1;
          goldPieces -= itemPrice2;

          eventLogHTML.innerHTML = "You sharpened your sword. It should be easier to hit monsters now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
        }
      });

      //Magic Item Button
      shopBtn3.addEventListener("click", function(){
        if (goldPieces >= itemPrice3) {
          magicItems += 1;
          playerDamageBoostMystical += 1;
          goldPieces -= itemPrice3;

          eventLogHTML.innerHTML = "You bought a magic item. You feel stronger now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
          magicItemsHTML.innerHTML = magicItems;
        }
      });

      //Sell Button
      sellBtn.addEventListener("click", function(){
        if (monsterParts > 0) {
          monsterParts -= 1;
          goldPieces += sellPrice;

          eventLogHTML.innerHTML = "You sold a monster part for gold.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          goldHTML.innerHTML = goldPieces;
          monsterPartsHTML.innerHTML = monsterParts;
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
      document.getElementById("detailRow").appendChild(sellBtn);
      document.getElementById("detailRow").appendChild(closeBtn);

      break;

    case 24: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("rollButton").disabled = true;

      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Collector<br><br>" + eventLog;

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

      //Create the shop buttons
      var shopBtn1 = document.createElement("BUTTON");
      var shopBtn2 = document.createElement("BUTTON");
      var shopBtn3 = document.createElement("BUTTON");
      var sellBtn = document.createElement("BUTTON");

      var closeBtn = document.createElement("BUTTON");

      shopBtn1.setAttribute("class", "inPopOut");
      shopBtn2.setAttribute("class", "inPopOut");
      shopBtn3.setAttribute("class", "inPopOut");
      closeBtn.setAttribute("class", "inPopOut");

      shopBtn1.textContent = "Trade 5 Monster Parts For a Health Potion";
      shopBtn2.textContent = "Have Chester Sharpen your Weapon for 10 Monster Parts";
      shopBtn3.textContent = "Recieve a Magic Item for 15 Monster Parts";

      closeBtn.textContent = "Leave Chester";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      //Add event listeners for buttons

      //Heal Button
      shopBtn1.addEventListener("click", function(){
        if (playerCurrentHealth < playerMaxHealth) {
          if (monsterParts >= 5) {
            playerCurrentHealth += 10;
            monsterParts -= 5;

            if (playerCurrentHealth > playerMaxHealth) {
              playerCurrentHealth = playerMaxHealth;
            }

            eventLogHTML.innerHTML = "You healed yourself at Chester's shop.<br><br>" + eventLog;

            //Add to total log
            eventLog = eventLogHTML.innerHTML

            monsterPartsHTML.innerHTML = monsterParts;
            playerHpHTML.innerHTML = playerCurrentHealth;
          }
        }
      });

      //Sharpen Button
      shopBtn2.addEventListener("click", function(){
        if (monsterParts >= 10) {
          playerToHitBoost += 1;
          monsterParts -= 10;

          eventLogHTML.innerHTML = "You sharpened your sword. It should be easier to hit monsters now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          monsterPartsHTML.innerHTML = monsterParts;
        }
      });

      //Magic Item Button
      shopBtn3.addEventListener("click", function(){
        if (monsterParts >= 15) {
          magicItems += 1;
          playerDamageBoostMystical += 1;
          monsterParts -= 15;

          eventLogHTML.innerHTML = "You bought a magic item. You feel stronger now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML

          monsterPartsHTML.innerHTML = monsterParts;
          magicItemsHTML.innerHTML = magicItems;
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
      document.getElementById("detailRow").appendChild(sellBtn);
      document.getElementById("detailRow").appendChild(closeBtn);

      break;

    case 25: /////////////////////////////////////////////////////////////////////////////////////////////////
      document.getElementById("rollButton").disabled = true;

      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Collector<br><br>" + eventLog;

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

      //Create the shop buttons
      var shopBtn1 = document.createElement("BUTTON");
      var shopBtn2 = document.createElement("BUTTON");
      var shopBtn3 = document.createElement("BUTTON");
      var sellBtn = document.createElement("BUTTON");

      var closeBtn = document.createElement("BUTTON");

      shopBtn1.setAttribute("class", "inPopOut");
      shopBtn2.setAttribute("class", "inPopOut");
      shopBtn3.setAttribute("class", "inPopOut");
      closeBtn.setAttribute("class", "inPopOut");

      shopBtn1.textContent = "Trade 5 Monster Parts For a Health Potion";
      shopBtn2.textContent = "Have Chester Sharpen your Weapon for 10 Monster Parts";
      shopBtn3.textContent = "Recieve a Magic Item for 15 Monster Parts";

      closeBtn.textContent = "Leave Chester";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      //Add event listeners for buttons

      //Heal Button
      shopBtn1.addEventListener("click", function(){
        if (playerCurrentHealth < playerMaxHealth) {
          if (monsterParts >= 5) {
            playerCurrentHealth += 10;
            monsterParts -= 5;

            if (playerCurrentHealth > playerMaxHealth) {
              playerCurrentHealth = playerMaxHealth;
            }

            eventLogHTML.innerHTML = "You healed yourself at Chester's shop.<br><br>" + eventLog;

            //Add to total log
            eventLog = eventLogHTML.innerHTML

            monsterPartsHTML.innerHTML = monsterParts;
            playerHpHTML.innerHTML = playerCurrentHealth;
          }
        }
      });

      //Sharpen Button
      shopBtn2.addEventListener("click", function(){
        if (monsterParts >= 10) {
          playerToHitBoost += 1;
          monsterParts -= 10;

          eventLogHTML.innerHTML = "You sharpened your sword. It should be easier to hit monsters now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML;

          monsterPartsHTML.innerHTML = monsterParts;
        }
      });

      //Magic Item Button
      shopBtn3.addEventListener("click", function(){
        if (monsterParts >= 15) {
          magicItems += 1;
          playerDamageBoostMystical += 1;
          monsterParts -= 15;

          eventLogHTML.innerHTML = "You bought a magic item. You feel stronger now.<br><br>" + eventLog;

          //Add to total log
          eventLog = eventLogHTML.innerHTML

          monsterPartsHTML.innerHTML = monsterParts;
          magicItemsHTML.innerHTML = magicItems;
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
      document.getElementById("detailRow").appendChild(sellBtn);
      document.getElementById("detailRow").appendChild(closeBtn);

      break;

      break;

    case 26: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Generous<br><br>";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

      //Chester will give the player either gold or a magic item
      var randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      //1-7 gives gold, 8-10 gives magic item
      if (randNum < 8) {
        //Give player gold
        var randGold = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        goldPieces += randGold;
        eventLogHTML.innerHTML += "Chester the Generous gives you " + randGold + " gold pieces for your bravery.<br><br>";

      } else {
        //Give player magic Item
        magicItems += 1;
        playerDamageBoostMystical += 1;

        eventLogHTML.innerHTML += "Chester the Generous gives you a magical item for your bravery.<br><br>";

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      magicItemsHTML.innerHTML = magicItems;

      break;

    case 27: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You look down the path and see something glow. As you get closer, the glowing light appears to resemble a young girl. You call out to her, and you hear her scream followed by a bright light. When the light dies down, the girl is gone. You do see a piece of gold on the ground, along with a note. The note has nothing written on it, only a happy face drawn on by a child.<br><br>" + eventLog;

      //Add the gold to the inventory
      goldPieces += 1;
      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 28: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find a Piece of Eight<br><br>";

      piecesOfEight += 1;

      if (piecesOfEight >= 8) {
        eventLogHTML.innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

        piecesOfEight -= 8;
        playerDamageBoostMystical += 5;

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      piecesOfEightHTML.innerHTML = piecesOfEight;

      break;

    case 29: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find a Piece of Eight<br><br>";

      piecesOfEight += 1;

      if (piecesOfEight >= 8) {
        eventLogHTML.innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

        piecesOfEight -= 8;
        playerDamageBoostMystical += 5;

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      piecesOfEightHTML.innerHTML = piecesOfEight;

      break;

    case 30: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "He is an ent, he speaks for the trees. The ent has come to break your knees.<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/ent.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Ent";
      enemyHpHTML.innerHTML = 200;
      enemyStrHTML.innerHTML = 15;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 3;
      enemyIntHTML.innerHTML = 11;
      enemyWisHTML.innerHTML = 9;
      enemyChrHTML.innerHTML = 6;

      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 31: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A highway bandit jumps out to attack you!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/bandit.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Bandit";
      enemyHpHTML.innerHTML = 42;
      enemyStrHTML.innerHTML = 10;
      enemyDexHTML.innerHTML = 13;
      enemyConHTML.innerHTML = 16;
      enemyIntHTML.innerHTML = 9;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 10;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 32: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You have come across an ice fox! Brrrrrilliant!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/iceFox.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Ice Fox";
      enemyHpHTML.innerHTML = 16;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 16;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 8;
      enemyWisHTML.innerHTML = 12;
      enemyChrHTML.innerHTML = 12;

      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 33: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin kicks you in the shins!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 34: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin drops from the sky to attack!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 35: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin springs out? And attacks?<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 36: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin springs out and offers you tea, then throws it in your face!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 37: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin springs out and dances... then attacks!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 38: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "Is it a dwarf? No! It is the goblin king in a beard!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 39: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "The goblin king has come to avenge his people or something.<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 40: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "The goblin king has come to avenge his people, I guess?<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 41: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "The goblin king has come to avenge his people yet again!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 42: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find a magical item and 250 gold lying on a piece of parchment. When you take the items, you see the paper has a message on it. \"You are still too weak to meet me. Grow stronger and you may earn my appearance.\"<br>-S<br><br>" + eventLog;

      goldPieces += 250;
      magicItems += 1;
      messagesFromSteve += 1;

      goldHTML.innerHTML = goldPieces;
      magicItemsHTML.innerHTML = magicItems;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 43: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You trip over a healing potion. Lucky for you it lands in your mouth and uncorks itself<br><br>" + eventLog;

      if (playerCurrentHealth < playerMaxHealth) {
        playerCurrentHealth += 10;

        if (playerCurrentHealth > playerMaxHealth) {
          playerCurrentHealth = playerMaxHealth;
        }
      }

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      playerHpHTML.innerHTML = playerCurrentHealth;

      break;

    case 44: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You encounter a merchant: Chester the Generous<br><br>";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      //Insert Chester's picture in the picture slot
      enemyImageHTML.src = "images/chester.jpg";
      enemyNameHTML.innerHTML = "Chester";

      //Chester will give the player either gold or a magic item
      var randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      //1-7 gives gold, 8-10 gives magic item
      if (randNum < 8) {
        //Give player gold
        var randGold = Math.floor(Math.random() * (200 - 50 + 1) + 50);
        goldPieces += randGold;
        eventLogHTML.innerHTML += "Chester the Generous gives you " + randGold + " gold pieces for your bravery.<br><br>";

      } else {
        //Give player magic Item
        magicItems += 1;
        playerDamageBoostMystical += 1;

        eventLogHTML.innerHTML += "Chester the Generous gives you a magical item for your bravery.<br><br>";

      }

      eventLogHTML.innerHTML += eventLog;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
      magicItemsHTML.innerHTML = magicItems;

      break;

    case 45: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find 1000 gold lying on a stone slab. When you take the items, you see the slab has a message carved on it. \"You are growing closer to finding me. Keep on this path and I will appear to you.\"<br>-S<br><br>" + eventLog;

      goldPieces += 1000;
      messagesFromSteve += 1;

      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 46: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "You find 1000 gold lying on a stone slab. When you take the items, you see the slab has a message carved on it. \"You are growing closer to finding me. Keep on this path and I will appear to you.\"<br>-S<br><br>" + eventLog;

      goldPieces += 1000;
      messagesFromSteve += 1;

      goldHTML.innerHTML = goldPieces;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 47: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "The goblin king has come to avenge his people, that you have slaughtered!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinKing.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin King";
      enemyHpHTML.innerHTML = 38;
      enemyStrHTML.innerHTML = 16;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 18;
      enemyIntHTML.innerHTML = 10;
      enemyWisHTML.innerHTML = 10;
      enemyChrHTML.innerHTML = 12;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 48: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin springs out and attacks... again.<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 49: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "Yet another goblin springs out and attacks... how many are there?<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 50: /////////////////////////////////////////////////////////////////////////////////////////////////
      if (messagesFromSteve >= 5) {

        alert("Steve has determined you are now worth his time. May he have mercy on your soul...");

        /Insert the picture into the enemy slot
        enemyImageHTML.src = "images/steve.jpg";

        //Load stats
        enemyNameHTML.innerHTML = "Steve";
        enemyHpHTML.innerHTML = 1;
        enemyStrHTML.innerHTML = 22;
        enemyDexHTML.innerHTML = 22;
        enemyConHTML.innerHTML = 18;
        enemyIntHTML.innerHTML = 18;
        enemyWisHTML.innerHTML = 22;
        enemyChrHTML.innerHTML = 50;


        //Pop out the detailed row
        document.getElementById("detailRow").style.width = "34%";
        document.getElementById("rollButton").disabled = true;

        //Create the elements for combat
        var combatButton = document.createElement("BUTTON");

        combatButton.textContent = "Next Combat Round";

        combatButton.setAttribute("class", "inPopOut");

        combatButton.addEventListener("click", function() {
          monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
        });

        document.getElementById("detailRow").appendChild(combatButton);

        //Commence combat
        document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
        document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      } else {

        eventLogHTML.innerHTML = "You see something out of the corner of your eye. When you look, you see a Piece of Eight laying on a note that says \"You are almost ready to meet me. Keep fighting, my child.\"<br>- S<br><br>";

        piecesOfEight += 1;

        if (piecesOfEight >= 8) {
          eventLogHTML.innerHTML += "You have found all eight pieces! They crumble in your hands, and you feel stronger somehow...<br><br>";

          piecesOfEight -= 8;
          playerDamageBoostMystical += 5;

        }

        eventLogHTML.innerHTML += eventLog;
        piecesOfEightHTML.innerHTML = piecesOfEight;

      }

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

    case 51: /////////////////////////////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "A goblin rushes out to attack...<br>Wait, no. It hands you a note that reads \"Hello, I am a goblin sent by S to welcome you to his land.\" <br>- Goblin #694B<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/goblinEnemy.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Goblin";
      enemyHpHTML.innerHTML = 12;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 10;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 6;
      enemyWisHTML.innerHTML = 8;
      enemyChrHTML.innerHTML = 3;

      messagesFromSteve += 1;

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 52: /////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "Suddenly you are smacked in the face by a flat metal object. It floats in front of you and proclaims itself Count Spatula, the Harbringer of Steve!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/countSpatula.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Count Spatula";
      enemyHpHTML.innerHTML = 40;
      enemyStrHTML.innerHTML = 5;
      enemyDexHTML.innerHTML = 6;
      enemyConHTML.innerHTML = 12;
      enemyIntHTML.innerHTML = 16;
      enemyWisHTML.innerHTML = 16;
      enemyChrHTML.innerHTML = 5;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 53: /////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "Bow wow babies! A wolf has come to feed... on you!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/wolf.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Wolf";
      enemyHpHTML.innerHTML = 14;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 14;
      enemyIntHTML.innerHTML = 3;
      enemyWisHTML.innerHTML = 12;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML


      break;

    case 54: /////////////////////////////////////////////////////////////////////////
      eventLogHTML.innerHTML = "Bow wow babies! A wolf has come to feed... on you!<br><br>" + eventLog;

      //Insert the picture into the enemy slot
      enemyImageHTML.src = "images/wolf.jpg";

      //Load stats
      enemyNameHTML.innerHTML = "Wolf";
      enemyHpHTML.innerHTML = 14;
      enemyStrHTML.innerHTML = 12;
      enemyDexHTML.innerHTML = 12;
      enemyConHTML.innerHTML = 14;
      enemyIntHTML.innerHTML = 3;
      enemyWisHTML.innerHTML = 12;
      enemyChrHTML.innerHTML = 3;


      //Pop out the detailed row
      document.getElementById("detailRow").style.width = "34%";
      document.getElementById("rollButton").disabled = true;

      //Create the elements for combat
      var combatButton = document.createElement("BUTTON");

      combatButton.textContent = "Next Combat Round";

      combatButton.setAttribute("class", "inPopOut");

      combatButton.addEventListener("click", function() {
        monsterCombat(playerCurrentHealth, playerStrHTML.innerHTML, playerDexHTML.innerHTML, playerConHTML.innerHTML, playerIntHTML.innerHTML, playerWisHTML.innerHTML, playerChrHTML.innerHTML, enemyHpHTML.innerHTML, enemyStrHTML.innerHTML, enemyDexHTML.innerHTML, enemyConHTML.innerHTML, enemyIntHTML.innerHTML, enemyWisHTML.innerHTML, enemyChrHTML.innerHTML)
      });

      document.getElementById("detailRow").appendChild(combatButton);

      //Commence combat
      document.getElementById("combatLog").innerHTML = playerNameHTML.innerHTML + " now has " + playerCurrentHealth + " health<br>";
      document.getElementById("combatLog").innerHTML += enemyNameHTML.innerHTML + " now has " + enemyHpHTML.innerHTML + " health";

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      break;

      //This should not trigger, but we have it just in case
    default:
      eventLogHTML.innerHTML = "You find one Gold piece<br><br>" + eventLog;

      goldPieces += 1;

      //Add to total log
      eventLog = eventLogHTML.innerHTML

      goldHTML.innerHTML = goldPieces;
  }
};
