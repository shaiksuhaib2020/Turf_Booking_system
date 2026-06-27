export type SlotStatus = "available" | "booked" | "selected";

export interface Slot {
  id: string;
  label: string; // e.g. "6 AM"
  status: SlotStatus;
}

export interface TurfInfo {
  name: string;
  sports: string[];
  surface: string;
  pricePerHour: number;
  location: string;
}

export interface Amenity {
  name: string;
  icon: string;
}

export interface Program {
  name: string;
  description: string;
  icon: string;
}
