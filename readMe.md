# EventDrivenExample 🛒📡

A clean, minimal example of an **event-driven micro-service** built with Node.js and Express.  
Uses a shared `EventEmitter` bus to decouple order placement from inventory, payment, and notification concerns.

> Perfect for learning **event-driven architecture** without external brokers—great first step before introducing Redis, RabbitMQ, or Kafka.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Quick Start](#quick-start)
- [API](#api)
- [Events](#events)
- [Extending](#extending)
- [License](#license)

---

## Overview
- Single HTTP endpoint `GET /place-order` publishes an `OrderPlaced` event.
- Three independent **consumers** react to that event:
  - `inventory` – reserves stock.
  - `payment` – processes payment.
  - `notification` – sends confirmation.
- All modules share a **singleton** `EventEmitter` (`eventBus.js`)—no external dependencies.

---

## Tech Stack
| Component  | Version / Notes                 |
|------------|---------------------------------|
| Runtime    | Node.js (LTS ≥ 18)              |
| Framework  | Express 5.x                     |
| Events     | Node.js built-in `EventEmitter` |
| Package    | No external message broker       |

---

## Project Structure
