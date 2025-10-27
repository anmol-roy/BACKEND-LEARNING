# JavaScript & Node.js Learning Repository

This repository contains a structured learning path for JavaScript fundamentals and Node.js backend development. Each numbered folder represents a different lesson or topic in the curriculum.

## Repository Structure

### Frontend Fundamentals
- **01/** - JavaScript Basics
  - HTML setup with JavaScript integration
  - Array methods (forEach, map, filter, find)
  - Object fundamentals

### Backend Development
- **02/** - Node.js Fundamentals
  - File system operations
  - Basic Node.js concepts
  - Package management basics

- **03/** - NPM Deep Dive
  - NPM package management
  - Understanding node_modules
  - Dependencies vs devDependencies
  - Custom scripts and PATH configuration

- **04/** - Express.js Framework
  - Express.js introduction and setup
  - Basic routing and request/response handling
  - Middleware implementation
  - Error handling

### Additional Lessons
- **05-25/** - Extended curriculum (various advanced topics)

## Getting Started

### Prerequisites
- Node.js installed on your system
- Basic understanding of JavaScript

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Navigate to any lesson folder and install dependencies:
```bash
cd 04
npm install
```

3. Run the examples:
```bash
node index.js
```

## Detailed Lesson Breakdown (Lessons 1-15)

### Lesson 01: JavaScript Fundamentals
**Topics Covered:**
- Array methods: `forEach()`, `map()`, `filter()`, `find()`
- Object creation and manipulation
- Basic HTML integration with JavaScript
- Console operations and debugging

**Key Concepts:**
- Understanding array iteration and transformation
- Working with JavaScript objects
- DOM integration basics

### Lesson 02: Node.js Basics
**Topics Covered:**
- Introduction to Node.js runtime
- File system operations
- Basic package.json setup
- Module system fundamentals

**Key Concepts:**
- Server-side JavaScript execution
- File handling and I/O operations
- Package management basics

### Lesson 03: NPM Deep Dive
**Topics Covered:**
- NPM package installation and management
- Understanding `node_modules` directory
- Dependencies vs devDependencies
- Custom scripts and PATH configuration
- Advanced NPM commands

**Key Concepts:**
- Package ecosystem navigation
- Dependency management strategies
- Script automation and workflow optimization

### Lesson 04: Express.js Framework Introduction
**Topics Covered:**
- Express.js framework setup
- Basic routing and HTTP methods
- Request and response handling
- Middleware implementation
- Error handling basics

**Key Concepts:**
- Web server creation with Express
- Route parameter handling
- Middleware chain understanding

### Lesson 05: Form Handling
**Topics Covered:**
- Frontend to backend data flow
- Form data processing
- Request body parsing
- Data validation basics

**Key Concepts:**
- HTTP form submissions
- Data extraction from requests
- Backend form processing workflows

### Lesson 06: Dynamic Routing & Templating
**Topics Covered:**
- Dynamic route parameters (`:username`, `:age`)
- EJS templating engine setup
- Static file serving
- View engine configuration
- Public directory setup

**Key Concepts:**
- URL parameter extraction
- Server-side rendering with EJS
- Static asset management

### Lesson 07: File-Based Task Management System
**Topics Covered:**
- Complete CRUD operations with file system
- File creation, reading, updating, deletion
- Dynamic file management
- Error handling and validation
- Filename sanitization

**Key Concepts:**
- File-based data persistence
- Full-stack application development
- User input validation and security

### Lesson 08: [Content Not Available]
**Status:** Empty lesson folder

### Lesson 09: [Content Not Available]
**Status:** Empty lesson folder

### Lesson 10: Database Fundamentals
**Topics Covered:**
- Introduction to databases and data storage
- SQL vs NoSQL comparison
- MongoDB basics and document structure
- Database terminologies: collections, documents, schemas, keys, models

**Key Concepts:**
- Data persistence strategies
- NoSQL document-based storage
- Database design principles

### Lesson 11: MongoDB Integration
**Topics Covered:**
- MongoDB installation and setup
- Database connection establishment
- Mongoose schema definition
- Model creation and basic CRUD operations
- Async/await patterns with database operations

**Key Concepts:**
- Database connectivity
- Schema-based data modeling
- Asynchronous database operations

### Lesson 12: Full-Stack CRUD Application
**Topics Covered:**
- Complete user management system
- EJS templating with database integration
- Create, Read, Update, Delete operations
- Dynamic rendering with database data
- Form handling with database persistence

**Key Concepts:**
- Full-stack application architecture
- Database-driven web applications
- User interface with backend integration

### Lesson 13: Authentication & Security
**Topics Covered:**
- User authentication concepts
- Password encryption with bcrypt
- JWT (JSON Web Tokens) implementation
- Cookie management
- Token generation and verification

**Key Concepts:**
- Security best practices
- Password hashing and salting
- Token-based authentication
- Session management with cookies

### Lesson 14: [Minimal Content]
**Status:** Contains only basic files

### Lesson 15: Advanced Authentication System
**Topics Covered:**
- Complete user registration system
- Mongoose schema for user management
- Password hashing integration
- JWT token creation and cookie storage
- User authentication workflow

**Key Concepts:**
- Production-ready authentication
- Secure user management
- Token-based session handling

## Usage Examples

### Running JavaScript Examples (Lesson 01)
```bash
# Open in browser
start 01/index.html
# Check browser console for array method demonstrations
```

### Running Express Server (Lesson 04)
```bash
cd 04
npm install
node index.js
# Visit http://localhost:3000
```

### Running Task Management System (Lesson 07)
```bash
cd 07
npm install
node index.js
# Visit http://localhost:3000 for full CRUD file management
```

### Running Database Examples (Lesson 11)
```bash
cd 11
npm install
# Ensure MongoDB is running locally
node index.js
# Test endpoints: /create, /read, /update
```

### Running Authentication System (Lesson 13)
```bash
cd 13
npm install
node app.js
# Test JWT token generation at http://localhost:3000
# Verify tokens at http://localhost:3000/verify
```

### Running Complete Auth System (Lesson 15)
```bash
cd 15
npm install
# Ensure MongoDB is running
node index.js
# Complete user registration and authentication system
```

## Learning Path

### Foundation Phase (Lessons 1-4)
1. **Lesson 01** - Master JavaScript array methods and object manipulation
2. **Lesson 02** - Understand Node.js runtime and file operations
3. **Lesson 03** - Learn NPM package management and workflow automation
4. **Lesson 04** - Build your first Express.js web server

### Web Development Phase (Lessons 5-7)
5. **Lesson 05** - Handle form data and user input
6. **Lesson 06** - Implement dynamic routing and templating with EJS
7. **Lesson 07** - Build a complete file-based task management system

### Database Integration Phase (Lessons 10-12)
8. **Lesson 10** - Understand database concepts and MongoDB basics
9. **Lesson 11** - Connect to MongoDB and perform CRUD operations
10. **Lesson 12** - Create a full-stack user management application

### Security & Authentication Phase (Lessons 13-15)
11. **Lesson 13** - Implement password encryption and JWT authentication
12. **Lesson 15** - Build a complete secure authentication system

**Note:** Lessons 8, 9, and 14 are either empty or contain minimal content and can be skipped in the learning sequence.

## Contributing

This is a learning repository. Feel free to:
- Add comments to existing code
- Create additional examples
- Improve documentation
- Fix any issues you encounter

## License

This project is for educational purposes.