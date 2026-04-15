# London Qur'an Fest — Event & Competition Platform

**Live:** [londonquranfest.co.uk](https://www.londonquranfest.co.uk)

A full-stack event management and competition platform built for London Qur'an Fest 2026 — a large-scale Qur'an recitation competition serving 100+ participants across multiple age categories.

---

## The Problem

Managing a multi-round Qur'an competition manually means:
- Inconsistent scoring across judges using paper sheets
- No structured feedback for participants
- Organisers unable to track registrations, payments, and results in one place
- No data-driven insights into participant performance

LQF solves this by building a centralised digital system for registration, scoring, and competition management.

---

## What's Built

### Frontend (Live in Production)
- Multi-page React + TypeScript application deployed on Vercel
- Competition information, categories, schedule, and registration flow
- Responsive design for mobile and desktop
- Custom domain with Cloudflare DNS

### Backend Architecture (Designed & In Development)
Full system architecture documented in [`BACKEND_SCOPE.md`](./BACKEND_SCOPE.md) and [`PRODUCTION_ARCHITECTURE.md`](./PRODUCTION_ARCHITECTURE.md).

---

## System Design

### User Roles
| Role | Permissions |
|---|---|
| **Participant** | Register, view schedule, receive confirmation |
| **Judge** | Login, score participants per round, view assigned categories |
| **Organiser/Admin** | Manage all participants, approve payments, view results, export data |

### Registration & Payment Flow
- Online registration form with server-side validation
- PayPal transaction ID submission
- Admin dashboard to verify and approve payment status
- Automated confirmation emails via SendGrid/AWS SES
- Duplicate registration detection and handling

### Scoring Engine
Judges score each participant across three criteria:
- **Tajweed** — accuracy of recitation rules
- **Memorization** — accuracy and completeness
- **Performance** — delivery and fluency

Multi-judge scoring with automatic average calculation. Separate preliminary and final round scores. Real-time leaderboard for organisers.

### Database Schema (PostgreSQL)
```
Users          → id, username, password_hash, role (admin | judge)
Participants   → id, full_name, dob, category_id, payment_status, transaction_id
Categories     → id, name, age_min, age_max
Scores         → id, participant_id, judge_id, tajweed, memorization, performance, total
```

### API Endpoints
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Admin / Judge login |
| POST | `/api/register` | New participant registration |
| GET | `/api/participants` | Admin: list all registrations |
| PUT | `/api/participants/:id/status` | Admin: update payment status |
| POST | `/api/scores` | Judge: submit participant score |
| GET | `/api/scores/:category` | Public: view published results |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend (planned) | Django REST Framework, PostgreSQL |
| Auth | JWT (role-based: admin, judge, participant) |
| Payments | PayPal (manual verification → webhook automation) |
| Email | SendGrid |
| Deployment | Vercel (frontend), Railway (backend) |
| DNS | Cloudflare |

---

## Key Engineering Decisions

**Why PostgreSQL over MongoDB?** The competition data is highly relational — participants belong to categories, scores reference both participants and judges, payment status ties to registration. A relational schema enforces data integrity at the database level.

**Why role-based auth?** Three distinct user types with different data access patterns. Judges should only see their assigned participants. Admins need full visibility. Public users see only published results.

**Why separate preliminary and final scores?** Allows the scoring system to function independently per round without overwriting historical data — important for dispute resolution and result transparency.

---

## Project Status

| Feature | Status |
|---|---|
| Frontend (multi-page, responsive) | ✅ Live |
| Custom domain + Cloudflare DNS | ✅ Live |
| Registration form (Google Apps Script) | ✅ Live |
| Backend API (Django + PostgreSQL) | 🔧 In Development |
| Admin dashboard | 🔧 In Development |
| Digital scoring system | 🔧 In Development |
| Automated payment verification | 📋 Planned |

---

## About

Built by [Mubeen](https://github.com/Mubeen16) as a freelance project for London Qur'an Fest 2026.
