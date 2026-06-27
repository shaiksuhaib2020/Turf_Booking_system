import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidIndianPhone(phone: string) {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
}
