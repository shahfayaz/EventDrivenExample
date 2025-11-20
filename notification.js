const eventBus = require('./eventBus');

function sendNotification(order) {
  console.log(`[Notification Service] Sending notification for order: ${order.id}`);
  // Simulate sending a notification (e.g., email or SMS)
  console.log(`[Notification Service] Notification sent successfully.`);
}

// Subscribe to the "OrderPlaced" event
eventBus.on('OrderPlaced', sendNotification);

module.exports = { sendNotification };