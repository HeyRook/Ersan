import { NextResponse } from "next/server";
import { createAppointmentRequest } from "@/src/lib/asistan-domain";

const requiredFields = ["customerId", "providerId", "serviceId", "startsAt", "timezone"] as const;

export async function POST(request: Request) {
  const body = await request.json();
  const missing = requiredFields.filter((field) => !body[field]);

  if (missing.length > 0) {
    return NextResponse.json({ error: "missing_required_fields", fields: missing }, { status: 400 });
  }

  const startsAt = new Date(body.startsAt);
  if (Number.isNaN(startsAt.getTime())) {
    return NextResponse.json({ error: "invalid_starts_at" }, { status: 400 });
  }

  const appointment = createAppointmentRequest({
    customerId: body.customerId,
    providerId: body.providerId,
    serviceId: body.serviceId,
    startsAt: startsAt.toISOString(),
    timezone: body.timezone,
  });

  return NextResponse.json(
    {
      appointment,
      nextActions: ["provider_approval", "send_fcm_customer_requested", "create_audit_log"],
    },
    { status: 201 },
  );
}
