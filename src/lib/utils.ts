import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs: ClassValue[]) {
  console.log(...inputs);
  return twMerge(clsx(inputs));
}
