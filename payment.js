const eventBus = require('./eventBus');

function processPayment(order) {
  console.log(`[Payment Service] Processing payment for order: ${order.id}`);
  // Simulate payment processing logic
  console.log(`[Payment Service] Payment processed successfully.`);
}

// Subscribe to the "OrderPlaced" event
eventBus.on('OrderPlaced', processPayment);

module.exports = { processPayment };