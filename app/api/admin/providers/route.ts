import { NextResponse } from "next/server";
import { providers } from "@/src/lib/asistan-domain";

export function GET() {
  return NextResponse.json({
    providers: providers.map((provider) => ({
      id: provider.id,
      name: provider.name,
      verificationStatus: provider.verified ? "verified" : "pending",
      category: provider.category,
      specialty: provider.specialty,
      location: provider.location,
    })),
    adminActions: ["verify_provider", "manage_categories", "manage_specialties", "moderate_reviews"],
  });
}
