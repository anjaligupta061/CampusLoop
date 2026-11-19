# CampusLoop — Master Project Handoff

## 1. Project Identity

**Project Name:** CampusLoop  
**Tagline:** One Campus. Shared Resources. Your Loop.

CampusLoop is a campus-based peer-to-peer resource-sharing platform designed to help college students buy, sell, rent, lend, give away, find lost belongings, and request resources within their campus community.

It aims to reduce waste, improve accessibility, encourage resource sharing, and build trust among students.

---

## 2. Core Problem

College students frequently need resources such as:

- Books
- Calculators
- Lab equipment
- Electronics
- Stationery
- Hostel essentials
- Sports equipment
- Other academic and everyday items

Many students have unused items they could share, sell, lend, rent, or give away, while other students need those same resources.

Existing solutions are often scattered across WhatsApp groups, informal networks, or generic marketplaces.

CampusLoop brings these activities into one campus-focused platform.

---

## 3. Project Goals

- Build a complete MERN-stack application.
- Solve a practical campus problem.
- Implement real authentication and database functionality.
- Create a polished, responsive UI.
- Implement meaningful CRUD operations.
- Include real-time communication.
- Integrate AI features meaningfully.
- Demonstrate security, scalability, and clean architecture.
- Build a strong portfolio project suitable for internships and placements.

---

## 4. Core Modules

### Module 1 — Authentication & Student Profiles

- Student registration
- Login and logout
- Authentication
- Student profiles
- Profile editing
- Campus information
- Profile pictures
- Borrowing and lending history
- User activity

### Module 2 — Campus Marketplace

Students can:

- Sell items
- Rent items
- Lend items for free
- Give away items permanently
- Browse listings
- Search listings
- Filter by category, price, condition, and type
- Sort results
- View listing details
- Save listings
- Create listings
- Edit and delete their listings

### Module 3 — Lost & Found

Students can report:

- Lost belongings
- Found belongings

Features:

- Item description
- Images
- Location
- Date
- Category
- Search and filtering
- Claims
- Claim approval/rejection
- Handover confirmation
- Status tracking

Lost & Found remains separate from Marketplace.

### Module 4 — Resource Requests & Transactions

Students can request to borrow or rent resources.

Features:

- Request an item
- Approve/reject requests
- Cancel requests
- Track request status
- Borrowing period
- Due date
- Return confirmation
- Transaction history

### Module 5 — Private Messaging

- Private conversations
- Real-time messaging
- Socket.IO
- Message history
- Unread messages
- Conversation list
- Sender and receiver identification
- Secure access

### Module 6 — LoopBack

LoopBack handles return tracking.

Features:

- Active borrowings
- Active rentals
- Due dates
- Return reminders
- Overdue items
- Return confirmation
- Borrowing history

### Module 7 — Need Board

Students can post items they need.

Example:

"I need a scientific calculator for two days."

Features:

- Need description
- Category
- Budget
- Required duration
- Location
- Responses
- Matching listings
- Fulfillment status
- Close request

### Module 8 — SmartMatch

AI-powered resource discovery.

Students can enter natural-language queries.

Example:

"Find me a calculator under ₹500 near my hostel."

The system converts the query into structured search criteria and retrieves relevant existing listings.

AI must not invent listings or availability.

### Module 9 — AI Listing Assistant

Helps students create better listings.

Features:

- Generate listing titles
- Improve descriptions
- Suggest keywords
- Suggest categories
- Improve clarity

AI-generated content must be reviewed and approved by the user before publishing.

### Module 10 — LoopTrust

Trust and reputation system.

Features:

- Transaction-based ratings
- Reviews
- Borrowing history
- Return behavior
- Reliability indicators
- Trust Score

Trust Score must be based on actual activity and transparent criteria.

### Module 11 — Notifications

Notifications for:

- New requests
- Request approvals/rejections
- Messages
- Due dates
- Overdue items
- Need Board responses
- Listing matches
- Lost & Found claims
- Moderation updates

### Module 12 — LoopImpact

Campus impact dashboard.

Possible metrics:

- Items shared
- Successful transactions
- Items reused
- Resources saved
- Estimated waste reduction
- Community participation

Metrics must be calculated from real platform data using transparent methodologies.

### Module 13 — Admin Dashboard

Admin capabilities:

- Manage users
- Manage listings
- Review reports
- Moderate content
- Manage Lost & Found reports
- Handle abuse
- Monitor platform activity
- Restrict or suspend accounts when necessary

Admin access must be role-protected.

---

## 5. Listing Types

CampusLoop supports four distinct listing types.

### SELL

Permanent ownership transfer in exchange for payment.

### RENT

Temporary usage in exchange for payment.

A return date is required.

### LEND

Temporary borrowing for free.

The item must be returned.

### GIVEAWAY

Permanent transfer for free.

No return is expected.

These listing types must not be treated interchangeably.

---

## 6. Listing Information

Listings may contain:

- Title
- Description
- Images
- Category
- Listing type
- Price
- Rental rate
- Condition
- Campus location
- Availability
- Owner
- Creation date
- Status

---

## 7. Discovery System

Marketplace discovery should support:

- Search
- Categories
- Filters
- Sorting
- Pagination or infinite scrolling
- Saved listings
- Listing details

---

## 8. UI/UX Direction

### Light Theme

- Lavender
- Soft blue
- Mint
- Peach
- Light pink
- White backgrounds
- Clean cards
- Soft shadows

### Dark Theme

- Midnight blue
- Navy
- Charcoal
- Purple accents
- Cyan accents
- Teal accents

### General UI Requirements

- Responsive layouts
- Mobile-friendly navigation
- Tablet and desktop support
- Consistent spacing
- Reusable components
- Accessible forms
- Loading states
- Empty states
- Error states
- Toast notifications
- Smooth transitions
- Hover interactions
- Polished micro-interactions

---

## 9. Technology Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- React Router
- Axios or Fetch
- Lucide React

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB
- Mongoose

### Additional Technologies

- Socket.IO
- JWT or secure session authentication
- bcrypt
- Image storage
- AI API integration
- Git
- GitHub
- Deployment platforms

---

## 10. Security Requirements

- Password hashing
- Authentication middleware
- Protected routes
- Role-based access control
- Input validation
- Authorization checks
- Secure API design
- Rate limiting
- Secure error handling
- Protection against unauthorized data access

Users must not be able to modify or access other users' protected data without permission.

---

## 11. MVP Priorities

The project will be built progressively.

Priority order:

1. Frontend foundation
2. Reusable components
3. Authentication UI
4. Marketplace
5. Listing details
6. Listing creation
7. Search and filtering
8. Profiles
9. Lost & Found
10. Need Board
11. Backend
12. Database
13. Authentication integration
14. Marketplace CRUD
15. Transactions
16. Messaging
17. Notifications
18. Return tracking
19. AI features
20. Trust system
21. Admin
22. Testing and deployment

---

## 12. Features Initially Out of Scope

Unless explicitly approved later:

- Native mobile applications
- Integrated payment gateway
- Campus-wide forums
- Complex recommendation algorithms
- Automated identity verification
- Document-based AI chatbot
- Large-scale enterprise features

---

## 13. Development Philosophy

CampusLoop must be built as a real application, not just a UI demonstration.

Every major feature should eventually connect to real backend functionality.

Dummy data may be used temporarily during frontend development but must be replaced when backend integration begins.

The project should prioritize:

- Clean code
- Maintainability
- Security
- Real functionality
- Good UI/UX
- Practical learning
- Interview readiness

---

## 14. Continuity Rule

This file stores the project's original vision and important historical decisions.

For current development status, use:

- `PROJECT_CONTEXT.md` for permanent instructions and project context.
- `CAMPUSLOOP_PROGRESS.md` for the latest verified development progress.

Never restart the project blindly.

Always inspect the actual code, Git state, and progress files before deciding what has been completed.
