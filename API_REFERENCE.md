# FigoERP API Reference

**Base URL:** `http://localhost:3000/api`

**Last Updated:** January 2026

---

## Table of Contents

1. [Authentication](#authentication)
2. [Protected Routes](#protected-routes)
3. [Attendance Management](#attendance-management)
4. [Recruitment](#recruitment)
5. [Onboarding](#onboarding)
6. [Candidates](#candidates)
7. [Job Openings](#job-openings)
8. [HR Dashboard](#hr-dashboard)

---

## Authentication

### Signup User

Create a new user account.

**Endpoint:** `POST /signup`

**Authentication:** No

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

**Response:** `200 OK`
```json
{
  "message": "User created successfully. Verification email sent.",
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "user_metadata": {
      "role": "user"
    }
  }
}
```

**Error Response:** `400 Bad Request`
```json
{
  "error": "Error message from server"
}
```

---

### Login User

Authenticate user and receive JWT token.

**Endpoint:** `POST /login`

**Authentication:** No

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:** `200 OK`
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "role": "user"
  }
}
```

**Error Response:** `400 Bad Request`
```json
{
  "error": "Invalid credentials"
}
```

---

### Forgot Password

Request password reset.

**Endpoint:** `POST /forgot-password`

**Authentication:** No

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password reset email sent"
}
```

---

## Protected Routes

### Get Protected Data

Retrieve protected user data (requires authentication).

**Endpoint:** `GET /protected`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:** `200 OK`
```json
{
  "message": "This is protected data",
  "user": {
    "id": "user-uuid",
    "email": "user@example.com"
  }
}
```

**Error Response:** `401 Unauthorized`
```json
{
  "error": "Invalid or missing token"
}
```

---

## Attendance Management

### Get Live Attendance Statistics

Retrieve current attendance data.

**Endpoint:** `GET /attendance/live`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Query Parameters:** None

**Response:** `200 OK`
```json
[
  {
    "id": "attendance-id",
    "employee_id": "emp-uuid",
    "check_in": "2026-01-14T09:00:00Z",
    "check_out": "2026-01-14T17:30:00Z",
    "timestamp": "2026-01-14T09:00:00Z",
    "status": "present"
  }
]
```

**Error Response:** `500 Internal Server Error`
```json
{
  "error": "Database error message"
}
```

---

## Recruitment

### Get Recruitment Pipeline

Retrieve recruitment pipeline data and metrics.

**Endpoint:** `GET /recruitment/`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:** `200 OK`
```json
{
  "total_candidates": 150,
  "pipeline_stages": [
    {
      "stage": "Applied",
      "count": 50
    },
    {
      "stage": "Screening",
      "count": 30
    },
    {
      "stage": "Interview",
      "count": 15
    },
    {
      "stage": "Offer",
      "count": 5
    }
  ]
}
```

**Error Response:** `401 Unauthorized`
```json
{
  "error": "Authentication required"
}
```

---

## Onboarding

### Get Onboarding Statistics

Retrieve onboarding progress and metrics.

**Endpoint:** `GET /onboarding/`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:** `200 OK`
```json
{
  "total_onboarding": 25,
  "in_progress": 10,
  "completed": 15,
  "pending_tasks": [
    {
      "id": "task-1",
      "employee_name": "John Doe",
      "task": "Document Submission",
      "due_date": "2026-01-20"
    }
  ]
}
```

**Error Response:** `401 Unauthorized`
```json
{
  "error": "Token verification failed"
}
```

---

## Candidates

### Get Recent Candidates

Retrieve list of recent candidates.

**Endpoint:** `GET /candidates/recent`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:** `200 OK`
```json
[
  {
    "id": "candidate-uuid",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "position_applied": "Software Engineer",
    "status": "Interview Scheduled",
    "applied_date": "2026-01-10",
    "phone": "+1-555-0123"
  }
]
```

**Error Response:** `401 Unauthorized`
```json
{
  "error": "Invalid authentication token"
}
```

---

## Job Openings

### Create Job Opening

Create a new job opening (requires authentication).

**Endpoint:** `POST /job-openings/`

**Authentication:** Required (Bearer Token)

**Headers:**
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Senior Software Engineer",
  "department": "Engineering",
  "location": "New York, NY",
  "employment_type": "Full-time",
  "min_experience": 5,
  "max_experience": 10,
  "positions": 3,
  "min_salary": 120000,
  "max_salary": 160000,
  "description": "We are looking for an experienced software engineer...",
  "responsibilities": [
    "Design and develop scalable solutions",
    "Lead technical reviews",
    "Mentor junior developers"
  ],
  "qualifications": [
    "Bachelor's degree in Computer Science",
    "5+ years of software development experience",
    "Strong knowledge of modern frameworks"
  ],
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "AWS"
  ],
  "visibility": "public"
}
```

**Response:** `201 Created`
```json
{
  "id": "job-opening-uuid",
  "title": "Senior Software Engineer",
  "department": "Engineering",
  "status": "DRAFT",
  "created_by": "user-uuid",
  "created_at": "2026-01-14T10:30:00Z"
}
```

**Error Response:** `400 Bad Request`
```json
{
  "error": "Missing required fields"
}
```

**Error Response:** `401 Unauthorized`
```json
{
  "error": "Authentication required"
}
```

---

### List Job Openings

Retrieve all job openings (public access).

**Endpoint:** `GET /job-openings/`

**Authentication:** No

**Query Parameters:** None

**Response:** `200 OK`
```json
[
  {
    "id": "job-opening-uuid",
    "title": "Senior Software Engineer",
    "department": "Engineering",
    "location": "New York, NY",
    "employment_type": "Full-time",
    "positions": 3,
    "min_salary": 120000,
    "max_salary": 160000,
    "status": "PUBLISHED",
    "created_at": "2026-01-14T10:30:00Z"
  }
]
```

---

## HR Dashboard

The HR Dashboard provides aggregated, read-only endpoints for dashboard UI visualization. All endpoints are protected and perform aggregation-only operations without direct database access.

### Dashboard Summary

Get overall HR dashboard summary.

**Endpoint:** `GET /hr/dashboard/summary`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "total_employees": 250,
  "total_open_positions": 8,
  "active_candidates": 145,
  "onboarding_in_progress": 12
}
```

---

### Attendance Overview

Get attendance overview metrics.

**Endpoint:** `GET /hr/dashboard/attendance/overview`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "total_employees": 250,
  "present_today": 235,
  "absent_today": 10,
  "on_leave": 5,
  "attendance_percentage": 94
}
```

---

### Attendance Today

Get today's attendance details.

**Endpoint:** `GET /hr/dashboard/attendance/today`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "date": "2026-01-14",
  "check_in_count": 235,
  "check_out_count": 210,
  "pending_checkout": 25
}
```

---

### Attendance Details

Get detailed attendance information.

**Endpoint:** `GET /hr/dashboard/attendance/details`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
[
  {
    "employee_id": "emp-uuid",
    "name": "John Doe",
    "check_in_time": "09:00:00",
    "check_out_time": "17:30:00",
    "status": "present"
  }
]
```

---

### Leaves Overview

Get leave statistics and pending requests.

**Endpoint:** `GET /hr/dashboard/leaves`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "total_leave_requests": 45,
  "approved": 30,
  "pending": 10,
  "rejected": 5,
  "upcoming_leaves": []
}
```

---

### Onboarding Progress

Get onboarding metrics and progress.

**Endpoint:** `GET /hr/dashboard/onboarding`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "total_in_onboarding": 12,
  "completed_steps": 45,
  "pending_steps": 15,
  "completion_percentage": 75
}
```

---

### Training Programs

Get training programs and enrollment data.

**Endpoint:** `GET /hr/dashboard/training`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "active_programs": 8,
  "total_enrolled": 120,
  "completed_trainings": 45,
  "upcoming_sessions": 12
}
```

---

### Compliance Status

Get compliance and regulatory status.

**Endpoint:** `GET /hr/dashboard/compliance`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
{
  "compliance_percentage": 98,
  "pending_certifications": 5,
  "expired_trainings": 2,
  "upcoming_renewals": 8
}
```

---

### Events

Get HR events and important dates.

**Endpoint:** `GET /hr/dashboard/events`

**Authentication:** Required (Bearer Token)

**Response:** `200 OK`
```json
[
  {
    "id": "event-uuid",
    "title": "Company Town Hall",
    "date": "2026-01-20",
    "time": "10:00:00",
    "description": "Quarterly business review"
  }
]
```

---

## Authentication Headers

For all protected endpoints, include the JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token_here>
```

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 200 | OK | Successful request |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Missing or invalid authentication token |
| 404 | Not Found | Resource not found |
| 500 | Internal Server Error | Server-side error |

## Rate Limiting

Currently, no rate limiting is implemented. Production deployment should include rate limiting.

## Pagination

Currently, endpoints do not support pagination. Future versions will include:
- `limit` query parameter
- `offset` query parameter
- `page` query parameter

## Versioning

Current API Version: v1 (implicit)

Future versions should use `/api/v2/...` format.

---

**Support:** For API issues or questions, contact the development team.
