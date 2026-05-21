# ASISTAN Product and Technical Architecture

## Repository audit

The repository started with only a placeholder `README.md`. There was no runnable frontend, backend, database schema, API boundary, design system, role model, booking engine, notification model, or provider/admin experience. That means the original state could not satisfy any MVP acceptance criteria beyond having a repository name.

## Product architecture principle

ASISTAN intentionally separates three product experiences:

1. **Customer mobile app**: marketplace discovery, filters, live availability, booking, notifications, appointment history, favorites, and verified reviews.
2. **Provider web dashboard**: full SaaS management for calendar, services, appointments, staff, roles, permissions, reviews, profile, analytics, subscriptions, and notifications.
3. **Provider mobile companion**: lightweight urgent-action app for today's agenda, approving/rejecting requests, secretary suggestions, notifications, and quick calendar actions.

Customer and provider UX must not be mixed. Customer UX should feel like a premium food-delivery marketplace for professional appointments. Provider web should feel like a modern SaaS dashboard. Provider mobile should feel like an assistant in the pocket, not an admin panel.

## Proposed stack

- **Web frontend**: Next.js, React, TypeScript, CSS design tokens now; Tailwind/shadcn can be introduced when component complexity grows.
- **Mobile**: React Native consuming the same marketplace, booking, notification, and provider-companion APIs.
- **Backend boundary**: Next.js route handlers for MVP mock/API contract; production can split into NestJS modules without changing resource names.
- **Database**: PostgreSQL with Prisma schema.
- **Auth**: session/JWT-ready user model with future Google, Apple, and phone login.
- **Notifications**: Firebase Cloud Messaging for mobile push, plus in-app notification records and preferences.
- **Scheduling**: timezone-safe `DateTime` fields with provider timezone, availability rules, exceptions, and blocks.

## Domain modules

- Identity and RBAC: users, staff members, roles, permissions, role permissions.
- Marketplace: categories, specialties, providers, provider profiles, locations, ranking.
- Booking: services, appointments, appointment status history, calendar availability, calendar exceptions, calendar blocks.
- Approval workflows: secretary suggestions and master-owner decisions.
- Trust: verified reviews, review replies, moderation status.
- Notifications: in-app/push/email/SMS/WhatsApp-ready channels, preferences, scheduling, retry history.
- Business model: plans, subscriptions, plan limits, feature gates.
- Governance: audit logs for sensitive actions.
- Growth: favorites, provider followers, waitlist entries.

## Phase 1 implementation plan

### Customer mobile MVP

- Location selector for Lefkoşa, Girne, Mağusa, and nearby services.
- Search prompt: `Hangi hizmete ihtiyacınız var?`.
- Category and specialty navigation.
- Provider listing cards with verification, rating, reviews, distance, live next slot, price, modality, and `Randevu Al` CTA.
- Provider profile contract with services, bio, location, reviews, and live slots.
- Short appointment request API that returns request status, audit intent, and notification intent.

### Provider web MVP

- Overview with today's appointments, pending requests, occupancy, reviews, no-show count, and AI insights.
- Calendar availability data model.
- Appointment management API boundary for approve/reject/reschedule flows.
- Notification center data model.
- Profile, services, and working-hours management data model.

### Admin web MVP

- Provider verification API boundary.
- Category/specialty governance data model.
- Review moderation data model.

## Phase 2 plan

- Master owner, secretary, staff, viewer, finance/admin, and platform admin roles.
- Custom permissions and feature checks.
- Secretary suggestion creation, master approval/rejection/edit-and-approve flows.
- Audit logs for every sensitive action.
- Provider mobile companion screens and push actions.

## Phase 3 plan

- Completed appointment feedback trigger after configurable delay.
- Verified review creation: one review per completed appointment.
- Provider replies and admin moderation.
- Ranking improvement using rating, review count, availability, distance, profile completeness, verification, response rate, cancellation rate, no-show rate, subscription level, and featured listing.

## Phase 4 plan

- Rule-based AI insights first: empty slot detection, waiting-list matching, daily summary, no-show risk, busy-day warning, review sentiment summary.
- Replace rule engine with real AI provider later behind the same insight interface.
