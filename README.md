# ASISTAN

ASISTAN is a Turkish-first, mobile-first professional service discovery, appointment booking, provider management, verified review, and AI-ready business operating platform for North Cyprus first and Turkey next.

## What this repository now contains

- Premium landing/product shell for ASISTAN.
- Customer mobile marketplace preview with location, categories, filters, provider cards, live slot previews, and booking CTA.
- Provider web dashboard preview with appointments, pending actions, calendar occupancy, and AI insight framing.
- PostgreSQL/Prisma domain schema for users, providers, roles, permissions, appointments, availability, secretary suggestions, notifications, reviews, subscriptions, audit logs, locations, and waitlists.
- MVP API route contracts for marketplace providers, appointment requests, provider agenda, and admin provider verification.
- Architecture and API documentation for the phased build plan.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Product experiences

1. **Customer mobile app**: discovery, filtering, provider profile, live availability, booking, notifications, and verified reviews.
2. **Provider web dashboard**: calendar, appointments, services, staff, roles, permissions, reviews, analytics, profile, subscription, and settings.
3. **Provider mobile companion**: today agenda, urgent approval/rejection, secretary suggestions, notifications, quick calendar actions, and limited customer access by role.

## Documentation

- [Product and technical architecture](docs/ARCHITECTURE.md)
- [API structure](docs/API.md)
- [Prisma schema](prisma/schema.prisma)
