export type AppointmentStatus =
  | "requested"
  | "pending_provider_approval"
  | "pending_master_approval"
  | "confirmed"
  | "rejected"
  | "reschedule_requested"
  | "cancelled_by_customer"
  | "cancelled_by_provider"
  | "completed"
  | "no_show"
  | "expired";

export type Permission =
  | "view_calendar"
  | "manage_calendar"
  | "create_calendar_block"
  | "edit_calendar_block"
  | "manage_availability"
  | "override_calendar"
  | "requires_master_approval_for_calendar_changes"
  | "view_appointments"
  | "create_appointment"
  | "approve_appointment"
  | "reject_appointment"
  | "reschedule_appointment"
  | "cancel_appointment"
  | "mark_completed"
  | "mark_no_show"
  | "requires_master_approval_for_appointment_changes"
  | "view_customer_profile"
  | "view_customer_notes"
  | "create_customer_note"
  | "edit_customer_note"
  | "view_sensitive_notes"
  | "send_customer_message"
  | "reply_to_customer"
  | "use_whatsapp_templates"
  | "send_reminders"
  | "view_reviews"
  | "reply_to_reviews"
  | "report_review"
  | "manage_services"
  | "manage_prices"
  | "manage_profile"
  | "manage_staff"
  | "manage_roles"
  | "view_analytics"
  | "view_revenue"
  | "manage_subscription";

export type RoleKey =
  | "customer"
  | "master_owner"
  | "provider_admin"
  | "secretary"
  | "staff"
  | "viewer"
  | "finance_admin"
  | "platform_admin";

export const defaultRolePermissions: Record<RoleKey, Permission[]> = {
  customer: [],
  master_owner: [
    "view_calendar",
    "manage_calendar",
    "create_calendar_block",
    "edit_calendar_block",
    "manage_availability",
    "override_calendar",
    "view_appointments",
    "create_appointment",
    "approve_appointment",
    "reject_appointment",
    "reschedule_appointment",
    "cancel_appointment",
    "mark_completed",
    "mark_no_show",
    "view_customer_profile",
    "view_customer_notes",
    "create_customer_note",
    "edit_customer_note",
    "view_sensitive_notes",
    "send_customer_message",
    "reply_to_customer",
    "view_reviews",
    "reply_to_reviews",
    "report_review",
    "manage_services",
    "manage_prices",
    "manage_profile",
    "manage_staff",
    "manage_roles",
    "view_analytics",
    "view_revenue",
    "manage_subscription",
  ],
  provider_admin: [
    "view_calendar",
    "manage_calendar",
    "create_calendar_block",
    "edit_calendar_block",
    "manage_availability",
    "view_appointments",
    "approve_appointment",
    "reject_appointment",
    "reschedule_appointment",
    "cancel_appointment",
    "view_customer_profile",
    "view_customer_notes",
    "send_customer_message",
    "view_reviews",
    "reply_to_reviews",
    "manage_services",
    "manage_prices",
    "manage_profile",
    "manage_staff",
    "view_analytics",
  ],
  secretary: [
    "view_calendar",
    "create_calendar_block",
    "requires_master_approval_for_calendar_changes",
    "view_appointments",
    "create_appointment",
    "reschedule_appointment",
    "cancel_appointment",
    "requires_master_approval_for_appointment_changes",
    "view_customer_profile",
    "view_customer_notes",
    "create_customer_note",
    "send_customer_message",
  ],
  staff: ["view_calendar", "view_appointments", "view_customer_profile"],
  viewer: ["view_calendar", "view_appointments", "view_reviews"],
  finance_admin: ["view_analytics", "view_revenue", "manage_subscription"],
  platform_admin: [
    "view_calendar",
    "manage_calendar",
    "override_calendar",
    "view_appointments",
    "approve_appointment",
    "reject_appointment",
    "reschedule_appointment",
    "cancel_appointment",
    "view_customer_profile",
    "view_reviews",
    "report_review",
    "manage_services",
    "manage_profile",
    "manage_staff",
    "manage_roles",
    "view_analytics",
    "view_revenue",
    "manage_subscription",
  ],
};

export type Provider = {
  id: string;
  name: string;
  title: string;
  category: string;
  specialty: string;
  location: string;
  distanceKm: number;
  rating: number;
  reviewCount: number;
  verified: boolean;
  online: boolean;
  inPerson: boolean;
  nextAvailable: string;
  price: string;
  responseRate: number;
  cancellationRate: number;
  profileCompleteness: number;
  subscriptionLevel: "free" | "pro" | "clinic" | "enterprise";
  description: string;
  slots: string[];
};

export const locations = ["Lefkoşa", "Girne", "Mağusa", "Güzelyurt", "İskele", "Yakınımdaki hizmetler"];

export const categories = [
  { name: "Doktor", icon: "🩺", specialties: ["Dahiliye", "Kardiyoloji", "Dermatoloji", "Kadın Hastalıkları", "Çocuk Doktoru", "Göz Doktoru", "KBB", "Ortopedi", "Psikiyatri"] },
  { name: "Diş Hekimi", icon: "🦷", specialties: ["Ortodonti", "İmplant", "Estetik Diş", "Çocuk Diş", "Endodonti"] },
  { name: "Psikolog", icon: "🧠", specialties: ["Bireysel Terapi", "Çift Terapisi", "Çocuk-Ergen", "Online Terapi"] },
  { name: "Diyetisyen", icon: "🥗", specialties: ["Kilo Yönetimi", "Sporcu Beslenmesi", "Diyabet", "Çocuk Beslenmesi"] },
  { name: "Avukat", icon: "⚖️", specialties: ["Aile Hukuku", "Ticaret Hukuku", "Gayrimenkul", "Ceza Hukuku"] },
  { name: "Güzellik", icon: "✨", specialties: ["Cilt Bakımı", "Lazer", "Medikal Estetik", "Saç Bakımı"] },
  { name: "Fizyoterapi", icon: "🏃", specialties: ["Manuel Terapi", "Spor Yaralanmaları", "Rehabilitasyon"] },
  { name: "Teknik Servis", icon: "🛠️", specialties: ["Klima", "Elektrik", "Beyaz Eşya", "Bilgisayar"] },
  { name: "Danışmanlık", icon: "💼", specialties: ["İşletme", "Kariyer", "Finans", "Eğitim"] },
];

export const providers: Provider[] = [
  {
    id: "dr-deniz-alkan",
    name: "Dr. Deniz Alkan",
    title: "Dermatoloji Uzmanı",
    category: "Doktor",
    specialty: "Dermatoloji",
    location: "Lefkoşa",
    distanceKm: 1.8,
    rating: 4.9,
    reviewCount: 184,
    verified: true,
    online: true,
    inPerson: true,
    nextAvailable: "Bugün 15:30",
    price: "₺2.200",
    responseRate: 98,
    cancellationRate: 2,
    profileCompleteness: 96,
    subscriptionLevel: "pro",
    description: "Akne, leke, saç dökülmesi ve medikal estetik odaklı doğrulanmış uzman profili.",
    slots: ["15:30", "16:10", "17:40"],
  },
  {
    id: "uzm-psk-aylin-erol",
    name: "Uzm. Psk. Aylin Erol",
    title: "Klinik Psikolog",
    category: "Psikolog",
    specialty: "Bireysel Terapi",
    location: "Girne",
    distanceKm: 4.6,
    rating: 4.8,
    reviewCount: 97,
    verified: true,
    online: true,
    inPerson: false,
    nextAvailable: "Yarın 10:00",
    price: "₺1.650",
    responseRate: 94,
    cancellationRate: 4,
    profileCompleteness: 91,
    subscriptionLevel: "clinic",
    description: "Kaygı, stres yönetimi ve ilişki danışmanlığı için online randevu kabul eder.",
    slots: ["10:00", "11:30", "14:00"],
  },
  {
    id: "dt-mert-sari",
    name: "Dt. Mert Sarı",
    title: "Diş Hekimi",
    category: "Diş Hekimi",
    specialty: "Estetik Diş",
    location: "Mağusa",
    distanceKm: 7.2,
    rating: 4.7,
    reviewCount: 132,
    verified: true,
    online: false,
    inPerson: true,
    nextAvailable: "Bugün 18:00",
    price: "₺1.900",
    responseRate: 91,
    cancellationRate: 6,
    profileCompleteness: 88,
    subscriptionLevel: "pro",
    description: "Estetik dolgular, beyazlatma ve implant üstü protezlerde hızlı randevu.",
    slots: ["18:00", "18:40", "19:20"],
  },
];

export function rankProvider(provider: Provider) {
  const ratingScore = provider.rating * 18;
  const reviewScore = Math.min(provider.reviewCount, 250) / 5;
  const availabilityScore = provider.nextAvailable.includes("Bugün") ? 30 : 15;
  const distanceScore = Math.max(0, 20 - provider.distanceKm * 2);
  const verificationScore = provider.verified ? 18 : 0;
  const responseScore = provider.responseRate / 5;
  const cancellationPenalty = provider.cancellationRate * 1.8;
  const profileScore = provider.profileCompleteness / 8;
  const subscriptionScore = { free: 0, pro: 6, clinic: 9, enterprise: 11 }[provider.subscriptionLevel];

  return Math.round(
    ratingScore +
      reviewScore +
      availabilityScore +
      distanceScore +
      verificationScore +
      responseScore +
      profileScore +
      subscriptionScore -
      cancellationPenalty,
  );
}

export function createAppointmentRequest(input: {
  customerId: string;
  providerId: string;
  serviceId: string;
  startsAt: string;
  timezone: string;
}) {
  return {
    id: `apt_${crypto.randomUUID()}`,
    status: "requested" satisfies AppointmentStatus,
    notification: "Randevu talebiniz alındı. Uzman onayladığında size bildirim göndereceğiz.",
    auditEvent: "appointment created",
    ...input,
  };
}
