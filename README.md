# HNG12 Stage 0 Backend Task
A simple REST API built with Node.js and Express that returns basic information including my email, current datetime, and GitHub repository URL.
## Description
This API was developed as part of the HNG12 internship program Stage 0 task. It provides a single endpoint that returns specified user information in JSON format.

## Features of this API

- Returns registered email address
- Returns current datetime in ISO 8601 format
- Returns GitHub repository URL
- Handles CORS for cross-origin requests
- Fast response time (< 500ms)

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## API Specification
### Endpoint
GET/
### Response Format
```json
{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/innovator-j/hng_firsttask"
}
```

## Setup Instructions

1. Clone the repository:
```json
git clone https://github.com/innovator-j/hng_firsttask.git
cd hng_firsttask
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
# For production
npm start

# For development
npm run dev
```

The API will be available at http://localhost:3000
Deployment
This API is deployed at: [Your deployed URL]
Testing
You can test the API using curl:
```bash
curl https://your-deployed-url
```
Or using your web browser by navigating to the deployed URL.


## Author
innovator