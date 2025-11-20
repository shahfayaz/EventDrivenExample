const eventBus = require('./eventBus');

function updateInventory(order) {
  console.log(`[Inventory Service] Updating inventory for order: ${order.id}`);
  // Simulate inventory update logic
  console.log(`[Inventory Service] Inventory updated successfully.`);
}

// Subscribe to the "OrderPlaced" event
eventBus.on('OrderPlaced', updateInventory);

module.exports = { updateInventory };