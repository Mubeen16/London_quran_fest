# Backend Scope for Quran Competition Platform

Based on the current frontend implementation and requirements, here is a breakdown of the backend scope needed to support and extend the platform's functionality.

## 1. Core Systems & Features

### A. Participant Registration (Priority: High)
*   **Current State**: Uses Google Apps Script.
*   **Backend Need**: A dedicated API endpoint (`POST /api/register`) to receive registration data.
*   **Validation**: Server-side validation for all fields (Age, Phone, Email, etc.).
*   **Email Service**: rigorous email confirmation system (e.g., SendGrid, AWS SES) to send beautifully formatted receipts and tickets.

### B. Payment Verification
*   **Current State**: Manual entry of PayPal Transaction ID.
*   **Backend Need**: 
    *   **Manual**: Admin dashboard to view and approve pending registrations by checking IDs.
    *   **Automated (Better)**: Webhook listener for PayPal/Stripe to automatically mark registrations as "Paid" when the transaction clears.

### C. Competition Management (Admin Dashboard)
*   **Category Management**: Create/Edit/Delete competition categories and age limits.
*   **Schedule Management**: Dynamic schedule updates so you don't need to redeploy the frontend to change times.
*   **Judge Management**: Create accounts for judges.

### D. Digital Scoring System (For Event Day)
*   Instead of paper, judges can log in to a specific URL.
*   **Real-time Scoring**: Judges submit scores for a participant.
*   **Leaderboard**: Automated calculation of totals and averages to determine winners instantly.

### E. Content Management
*   **Gallery**: Admin upload for event photos/videos.
*   **Announcements**: Dynamic news ticker or announcements section.

## 2. Proposed Database Schema

### `Users` (Admins & Judges)
*   `id`
*   `username`
*   `password_hash`
*   `role` (admin, judge)

### `Participants`
*   `id`
*   `full_name`
*   `dob` (for age calculation)
*   `gender`
*   `category_id` (FK)
*   `parent_name`
*   `contact_info` (phone, email, address)
*   `payment_status` (pending, paid, failed)
*   `payment_transaction_id`
*   `created_at`

### `Scores`
*   `id`
*   `participant_id` (FK)
*   `judge_id` (FK)
*   `tajweed_score`
*   `memorization_score`
*   `performance_score`
*   `total_score`

## 3. API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/login` | Admin/Judge login |
| **POST** | `/api/register` | Submit new registration |
| **GET** | `/api/participants` | (Admin) List all registrations |
| **PUT** | `/api/participants/:id/status` | (Admin) Update payment status |
| **GET** | `/api/scores/:category` | (Public) View results (when published) |
| **POST** | `/api/scores` | (Judge) Submit a score |

## 4. Technology Stack Options

### Option A: Node.js (Recommended for React synergy)
*   **Runtime**: Node.js
*   **Framework**: Express.js or NestJS
*   **Database**: MongoDB (Flexible for varying form data) or PostgreSQL (Structured, relational).
*   **Language**: TypeScript (Shared types with Frontend).

### Option B: Python (Good for data/AI features)
*   **Framework**: FastAPI or Django
*   **Database**: PostgreSQL
