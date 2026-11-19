# CampusLoop

### One Campus. Shared Resources. Your Loop.

CampusLoop is a campus-based peer-to-peer resource-sharing platform designed to help students buy, sell, rent, lend, give away, discover resources, and reconnect with lost belongings within their college community.

The goal is to make campus resource sharing simpler, smarter, more accessible, and more trustworthy.

---

## The Problem

College students often need books, calculators, electronics, stationery, hostel essentials, and other resources for short periods.

At the same time, other students have unused items that could be sold, rented, lent, or given away.

These interactions are often scattered across WhatsApp groups and informal networks, making discovery and coordination difficult.

CampusLoop aims to bring these activities together in one platform.

---

## Features

### Campus Marketplace

- Buy and sell items
- Rent resources
- Borrow items for free
- Give away unused items
- Browse listings
- Search and filter resources
- Save listings
- View listing details

### Lost & Found

- Report lost belongings
- Report found belongings
- Search reported items
- Submit claims
- Coordinate item recovery

### Resource Requests

- Request items
- Approve or reject requests
- Track transactions
- Manage borrowing and returning

### Need Board

Post resources you need and connect with students who can help.

### Private Messaging

Communicate with other students through private conversations.

### LoopBack

Track borrowed and rented items, return dates, and overdue resources.

### SmartMatch

Discover relevant resources through natural-language searches.

### AI Listing Assistant

Generate and improve listing descriptions, titles, and keywords.

### LoopTrust

Build community trust through transaction-based ratings, reviews, and reliability indicators.

### Notifications

Receive updates about requests, messages, returns, matches, and other activities.

### LoopImpact

Explore the collective impact of resource sharing across the campus.

### Admin Dashboard

Moderation and platform management tools.

---

## Listing Types

| Type | Description | Payment | Return Required |
|---|---|---|---|
| SELL | Permanent ownership transfer | Yes | No |
| RENT | Temporary usage | Yes | Yes |
| LEND | Temporary borrowing | No | Yes |
| GIVEAWAY | Permanent free transfer | No | No |

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB
- Mongoose

### Additional Tools

- Socket.IO
- JWT
- bcrypt
- Git
- GitHub

Additional AI and image-storage technologies will be integrated as development progresses.

---

## Project Structure

The project structure will evolve as features are implemented.

```text
Campus_Loop/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── server/                 # Backend to be developed
│
├── docs/
│   ├── CAMPUSLOOP_MASTER_HANDOFF.md
│   ├── PROJECT_CONTEXT.md
│   └── CAMPUSLOOP_PROGRESS.md
│
├── README.md
└── .gitignore
```

---

## Development Status

CampusLoop is currently under active development.

The project is being built incrementally, beginning with the frontend and progressively introducing backend services, database integration, authentication, real-time communication, and AI features.

Some features and screens may currently use dummy data or UI-only implementations.

### Planned Development Phases

- [x] Initial frontend foundation
- [x] React and Vite setup
- [x] Routing
- [x] Reusable components
- [x] Theme switching
- [x] Initial landing page
- [ ] Marketplace
- [ ] Listing management
- [ ] Lost & Found
- [ ] Need Board
- [ ] Backend and database
- [ ] Authentication
- [ ] Transactions
- [ ] Messaging
- [ ] Notifications
- [ ] AI features
- [ ] Trust system
- [ ] Admin dashboard
- [ ] Testing
- [ ] Deployment

*Checklist reflects the historical Day 8 checkpoint and must be updated as development continues.*

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd Campus_Loop
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

Backend setup instructions will be added once the backend is implemented.

---

## Project Documentation

Detailed project documentation is available inside the `docs/` directory.

| File | Purpose |
|---|---|
| `CAMPUSLOOP_MASTER_HANDOFF.md` | Original vision, features, architecture, and major decisions |
| `PROJECT_CONTEXT.md` | Permanent AI/project context and development instructions |
| `CAMPUSLOOP_PROGRESS.md` | Live progress, checkpoints, stopping point, and next task |

---

## Future Goals

- Complete frontend modules
- Build REST APIs
- Integrate MongoDB
- Implement authentication and authorization
- Implement transaction workflows
- Add real-time chat
- Introduce AI-powered discovery
- Build a trust and reputation system
- Implement moderation and security
- Deploy the application

---

## Project Philosophy

CampusLoop is being developed as a real-world full-stack project with an emphasis on practical learning, clean architecture, meaningful functionality, usability, security, and scalability.

The goal is not simply to build a collection of screens, but to create a functioning campus resource-sharing ecosystem.

---

## Author

Developed as a full-stack learning and portfolio project.

---

## License

License to be decided.