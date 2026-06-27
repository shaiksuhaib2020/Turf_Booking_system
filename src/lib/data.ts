import { Slot, TurfInfo, Amenity, Program } from "@/types";

export const turfInfo: TurfInfo = {
  name: "SuperOver",
  sports: ["Cricket", "Football"],
  surface: "Premium Synthetic Turf",
  pricePerHour: 800,
  location: "Hyderabad",
};

export const slots: Slot[] = [
  { id: "06", label: "6 AM", status: "available" },
  { id: "07", label: "7 AM", status: "booked" },
  { id: "08", label: "8 AM", status: "available" },
  { id: "09", label: "9 AM", status: "available" },
  { id: "10", label: "10 AM", status: "booked" },
  { id: "16", label: "4 PM", status: "available" },
  { id: "17", label: "5 PM", status: "available" },
  { id: "18", label: "6 PM", status: "booked" },
  { id: "19", label: "7 PM", status: "available" },
  { id: "20", label: "8 PM", status: "available" },
  { id: "21", label: "9 PM", status: "available" },
];

export const amenities: Amenity[] = [
  { name: "Parking", icon: "ParkingCircle" },
  { name: "Premium Synthetic Turf", icon: "Sprout" },
  { name: "Cricket Equipment", icon: "CricketIcon" },
  { name: "Football Equipment", icon: "FootballIcon" },
  { name: "Flood Lights", icon: "Lightbulb" },
  { name: "Clean Rest Rooms", icon: "Bath" },
  { name: "Drinking Water", icon: "GlassWater" },
  { name: "Seating Area", icon: "Armchair" },
  { name: "Night Matches", icon: "Moon" },
  { name: "Safe Environment", icon: "ShieldCheck" },
];

export const coachingPrograms: Program[] = [
  { name: "Kids Cricket Coaching", description: "Learn the fundamentals of cricket in a fun and safe environment.", icon: "kids-cricket" },
  { name: "Advanced Cricket Coaching", description: "Refine your technique and match awareness with expert guidance.", icon: "advanced-cricket" },
  { name: "Football Academy", description: "Structured drills and match-play for building footballing fundamentals.", icon: "football-academy" },
  { name: "Weekend Batches", description: "Convenient weekend sessions for busy students and professionals.", icon: "weekend-batches" },
  { name: "Personal Coaching", description: "One-on-one training focused entirely on your specific areas of improvement.", icon: "personal-coaching" },
  { name: "Group Coaching", description: "Train with peers and develop teamwork and competitive skills.", icon: "group-coaching" },
];

export const whyChooseUs = [
  { name: "Experienced and qualified coaches", icon: "Award" },
  { name: "Structured training programs", icon: "ListChecks" },
  { name: "Modern sports facilities", icon: "Building2" },
  { name: "Programs for all age groups", icon: "Users" },
  { name: "Beginner to advanced coaching", icon: "TrendingUp" },
  { name: "Individual and group training options", icon: "UserPlus" },
  { name: "Opportunities for tournaments and competitive play", icon: "Trophy" },
];
