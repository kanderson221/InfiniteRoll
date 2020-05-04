/* Set the width of the side navigation to 250px */
function openStats() {
  document.getElementById("playerArea").style.width = "250px";
  document.getElementById("inventoryArea").style.width = "0";
}

/* Set the width of the side navigation to 0 */
function closeStats() {
  document.getElementById("playerArea").style.width = "0";
}

function openInventory() {
  document.getElementById("inventoryArea").style.width = "250px";
  document.getElementById("playerArea").style.width = "0";
}

/* Set the width of the side navigation to 0 */
function closeInventory() {
  document.getElementById("inventoryArea").style.width = "0";
}
