import { NextResponse } from "next/server";

const appointments = [
  { id: "apt_1001", time: "2026-05-15T09:30:00.000Z", customer: "Ali Yılmaz", status: "confirmed" },
  { id: "apt_1002", time: "2026-05-15T11:00:00.000Z", customer: "Ayşe Demir", status: "pending_provider_approval" },
  { id: "apt_1003", time: "2026-05-15T15:30:00.000Z", customer: "Boş slot", status: "ai_empty_slot_suggestion" },
];

export function GET() {
  return NextResponse.json({ appointments, notificationCenter: { unread: 4, pendingApprovals: 2 } });
}
