const EventEmitter = require('events');

class EventBus extends EventEmitter {}

// Export a singleton instance of the event bus
module.exports = new EventBus();