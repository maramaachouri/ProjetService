# Smart Traffic Monitoring System 🚦

A microservices-based smart traffic monitoring platform built with NestJS, PostgreSQL, GraphQL Gateway, and JWT Authentication.

The platform allows traffic monitoring, vehicle tracking, incident management, traffic density analysis, notifications, and secure role-based access control.

## Features

- JWT Authentication & Authorization
- Role-Based Access Control (ADMIN / OPERATOR)
- Vehicle Management
- GPS Vehicle Tracking
- Traffic Density Monitoring
- Incident Management
- Notification System
- GraphQL Gateway Aggregation
- PostgreSQL Database
- Microservices Architecture

## Architecture

```text
                GraphQL Gateway
                        |
------------------------------------------------
|               |              |               |
Auth         Vehicle       Traffic        Incident
Service      Service       Service        Service
                                                    |
                                             Notification
                                                Service
```

## Technologies Used

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- GraphQL
- Apollo Server
- JWT Authentication
- REST APIs
- Microservices Architecture
- Postman

## Services & Ports

| Service | Port |
|----------|------|
| GraphQL Gateway | 3000 |
| Auth Service | 3001 |
| Vehicle Service | 3002 |
| Traffic Service | 3003 |
| Incident Service | 3004 |
| Notification Service | 3005 |

## Authentication

The system uses JWT Authentication.

After login, the user receives a JWT token that must be included in protected requests:

```http
Authorization: Bearer TOKEN
```

Roles supported:

- ADMIN
- OPERATOR

## Protected Routes

The following routes are protected and accessible only by ADMIN users:

- DELETE /vehicles/:id
- PATCH /traffic/zones/:id/density
- PATCH /incidents/:id/status

## GraphQL Example

```graphql
query {
  vehicles {
    matricule
  }

  incidents {
    status
  }

  trafficZones {
    level
  }

  notifications {
    message
  }
}
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies for each service:

```bash
npm install
```

Run each service:

```bash
npm run start:dev
```

## Project Status

The backend system is fully functional and includes:

- Authentication & Authorization
- Microservices Communication
- GraphQL Aggregation
- Traffic Monitoring Logic
- GPS Tracking
- Incident Workflow
- Notifications System
- Secure ADMIN Operations

