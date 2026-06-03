# FileUploadFlow

> A full-stack application that visualizes the lifecycle of file uploads in real time.

FileUploadFlow demonstrates how a backend system processes uploaded files by exposing each stage of the upload pipeline to the user interface. Instead of treating file uploads as a black box, FileUploadFlow provides visibility into every step — from receiving the file to validation, processing, storage, and completion.

---

## Features

- Real-time upload progress visualization
- File validation workflow
- Backend processing simulation
- WebSocket-based live updates
- Shared TypeScript contracts between frontend and backend
- Monorepo architecture powered by Nx
- Modern React frontend built with Vite and Tailwind CSS
- NestJS backend with scalable architecture

---

## Technology Stack

### Frontend

| Tool | Purpose |
|------|---------|
| React | UI framework |
| Vite | Build tool & dev server |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Socket.IO Client | Real-time communication |

### Backend

| Tool | Purpose |
|------|---------|
| NestJS | Server framework |
| TypeScript | Type safety |
| Socket.IO | WebSocket server |
| Multer | File upload handling |

### Development Tools

- **Nx** — Monorepo management
- **ESLint** — Linting
- **Prettier** — Code formatting
- **GitHub Actions** — CI/CD *(planned)*

---

## Architecture

```
User
 │
 ▼
React Frontend
 │
 │  HTTP Upload
 ▼
NestJS API
 │
 │  Processing Events
 ▼
WebSocket Gateway
 │
 ▼
React UI Updates
```

---

## Upload Pipeline Stages

```
Received → Validated → Processing → Stored → Complete
```

Each stage emits a WebSocket event that the frontend listens to, updating the UI in real time as the file moves through the pipeline.

---

## Learning Objectives

This project explores:

- File upload handling in a NestJS backend
- Real-time communication with Socket.IO
- Event-driven architecture patterns
- Frontend and backend integration
- Monorepo development with Nx
- Type-safe full-stack applications with shared contracts

---

## Project Goal

To build a production-inspired file upload platform that helps developers understand and visualize backend file processing workflows through an interactive user experience.