import { getHomeModel } from "@/modules/home/services/home-content-service";
import { getHomePageData } from "@/modules/home/services/home-page-service";

export function fetchHomeModel() {
  return getHomeModel();
}

export function fetchHomePageData() {
  return getHomePageData();
}
