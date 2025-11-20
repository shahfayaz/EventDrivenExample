const express = require('express');
const eventBus = require('./eventBus');

const app = express();
app.use(express.json());

// Import services (to register their event listeners)
require('./inventory');
require('./payment');
require('./notification');

// Endpoint to simulate placing an order
app.get('/place-order', (req, res) => {
  const order = req.query;

  console.log('[Order Service] Order placed:', order);

  // Publish the "OrderPlaced" event
  eventBus.emit('OrderPlaced', order);

  res.status(200).json({ message: 'Order placed successfully!', order });
});

// Start the server
const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});