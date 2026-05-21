# ASISTAN API Structure

## Principles

- Separate marketplace, provider, admin, and notification boundaries.
- Enforce authorization on every protected route.
- Store all sensitive state transitions in `audit_logs`.
- Use timezone-safe ISO timestamps and explicit timezone names.
- Prevent double booking in both service layer and PostgreSQL constraints/indexes.

## Implemented MVP route contracts

### `GET /api/marketplace/providers`

Query filters:

- `location`
- `specialty`
- `minRating`
- `availability=today`

Returns ranked provider cards for the customer mobile marketplace.

### `POST /api/appointments`

Creates a customer appointment request.

Required body:

```json
{
  "customerId": "cus_123",
  "providerId": "pro_123",
  "serviceId": "svc_123",
  "startsAt": "2026-05-15T12:30:00.000Z",
  "timezone": "Asia/Nicosia"
}
```

Returns:

- appointment status `requested`
- customer notification copy
- audit event intent
- provider approval next action

Production service-layer checks must include:

- provider exists and is verified/active
- customer is authenticated
- service belongs to provider
- slot is inside working hours
- slot is not blocked or vacation time
- slot does not conflict with confirmed/pending appointments
- appointment is not in the past

### `GET /api/provider/appointments`

Returns provider agenda and notification-center summary for web dashboard/provider companion clients.

### `GET /api/admin/providers`

Returns provider verification list for platform admin.

## Planned route groups

### Marketplace

- `GET /api/marketplace/categories`
- `GET /api/marketplace/categories/:id/specialties`
- `GET /api/marketplace/providers/:id`
- `GET /api/marketplace/providers/:id/availability`
- `POST /api/marketplace/providers/:id/favorite`

### Booking

- `POST /api/appointments`
- `PATCH /api/appointments/:id/cancel`
- `PATCH /api/appointments/:id/reschedule-request`
- `GET /api/customers/me/appointments`

### Provider web

- `GET /api/provider/overview`
- `GET /api/provider/calendar`
- `PUT /api/provider/calendar/availability`
- `POST /api/provider/calendar/blocks`
- `PATCH /api/provider/appointments/:id/approve`
- `PATCH /api/provider/appointments/:id/reject`
- `PATCH /api/provider/appointments/:id/reschedule`
- `CRUD /api/provider/services`
- `CRUD /api/provider/staff`
- `CRUD /api/provider/roles`

### Secretary suggestions

- `POST /api/provider/secretary-suggestions`
- `PATCH /api/provider/secretary-suggestions/:id/approve`
- `PATCH /api/provider/secretary-suggestions/:id/reject`
- `PATCH /api/provider/secretary-suggestions/:id/edit-and-approve`

### Reviews

- `POST /api/reviews`
- `POST /api/provider/reviews/:id/reply`
- `PATCH /api/admin/reviews/:id/moderate`

### Notifications

- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`
- `PUT /api/notification-preferences`
- `POST /api/notifications/fcm-token`

### Admin

- `GET /api/admin/providers`
- `PATCH /api/admin/providers/:id/verify`
- `CRUD /api/admin/categories`
- `CRUD /api/admin/specialties`
- `GET /api/admin/analytics`
