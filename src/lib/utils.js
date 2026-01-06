// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes without style conflicts
 * Example: cn("px-2 py-2", "p-5") -> "p-5" (merges correctly)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}