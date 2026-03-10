import {
  HOME_EDITORIAL_CONFIG,
  HOME_FINAL_CTA,
  HOME_SECTION_ORDER,
  HOME_SECTIONS,
  HOME_SEO,
} from "@/modules/home/constants";
import { HOME_ELYNTHIS_BLOCK } from "@/modules/home/constants/home-elynthis-config";
import type {
  HomeCtaBlock,
  HomeEditorialConfig,
  HomeElynthisBlock,
  HomeSectionConfigMap,
  HomeSectionKey,
  HomeSeoMetadata,
} from "@/modules/home/types/home-types";

export function getHomeSeo(): HomeSeoMetadata {
  return HOME_SEO;
}

export function getHomeSectionOrder(): HomeSectionKey[] {
  return HOME_SECTION_ORDER;
}

export function getHomeSectionsConfig(): HomeSectionConfigMap {
  return HOME_SECTIONS;
}

export function getHomeEditorialConfig(): HomeEditorialConfig {
  return HOME_EDITORIAL_CONFIG;
}

export function getHomeElynthisBlock(): HomeElynthisBlock {
  return HOME_ELYNTHIS_BLOCK;
}

export function getHomeFinalCta(): HomeCtaBlock {
  return HOME_FINAL_CTA;
}
