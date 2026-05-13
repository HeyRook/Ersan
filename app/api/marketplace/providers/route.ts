import { NextResponse } from "next/server";
import { providers, rankProvider } from "@/src/lib/asistan-domain";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");
  const specialty = searchParams.get("specialty");
  const minRating = Number(searchParams.get("minRating") ?? 0);
  const availability = searchParams.get("availability");

  const data = providers
    .filter((provider) => (location ? provider.location === location : true))
    .filter((provider) => (specialty ? provider.specialty === specialty : true))
    .filter((provider) => provider.rating >= minRating)
    .filter((provider) => (availability === "today" ? provider.nextAvailable.includes("Bugün") : true))
    .map((provider) => ({ ...provider, rankingScore: rankProvider(provider) }))
    .sort((a, b) => b.rankingScore - a.rankingScore);

  return NextResponse.json({ providers: data, filters: { location, specialty, minRating, availability } });
}
