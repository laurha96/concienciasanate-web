import { HOME_TESTIMONIALS } from "@/modules/home/constants";
import type { HomeTestimonial } from "@/modules/home/types/home-types";

export function listHomeTestimonials(): HomeTestimonial[] {
  return HOME_TESTIMONIALS;
}
