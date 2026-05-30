# Ticket Management System

A full-stack ticket management application designed to streamline issue tracking, improve workflow efficiency, and provide a clean user experience for managing tasks from creation to resolution.

---

##  Key Features

- **Full CRUD Functionality** – Create, update, and delete tickets seamlessly  
- **Status Management** – Track tickets through stages: *Open*, *In Progress*, and *Resolved*  
- **Dynamic UI Rendering** – Real-time updates with optimized data fetching  
- **Server Actions Integration** – Efficient backend handling using modern Next.js patterns  
- **Responsive Design** – Fully optimized for different screen sizes  
- **Scalable Architecture** – Modular and maintainable code structure  

---

## Tech Stack

- **Frontend:** :contentReference[oaicite:0]{index=0}, :contentReference[oaicite:1]{index=1}, TypeScript  
- **Backend:** Next.js Server Actions / API Routes  
- **Database:** :contentReference[oaicite:2]{index=2} + PostgreSQL (Supabase)  
- **Styling:** :contentReference[oaicite:3]{index=3}  

---

## Architecture Highlights

- Separation of concerns using feature-based structure  
- Reusable UI components for scalability  
- Optimized data fetching with caching and revalidation strategies  
- Clean integration between frontend and database layer  

---

## Tickets Overview
![Tickets Page](./screenshots/tickets-page.png)

## Project Structure

```bash
src/
  features/
    tickets/
      components/
      actions/
  lib/
  app/
components/
