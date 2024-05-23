import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn() {
  return twMerge(clsx.apply(null, arguments));
}
