import jaipur from "./jaipur";
import delhi from "./delhi";
import mumbai from "./mumbai";
import bengaluru from "./bengaluru";
import pune from "./pune";
import patna from "./patna";
import bhubaneswar from "./bhubaneswar";
import darjeeling from "./darjeeling";
import manali from "./manali";
import rishikesh from "./rishikesh";
import haridwar from "./haridwar";
import kochi from "./kochi";

export const cities = {
  jaipur,
  delhi,
  mumbai,
  bengaluru,
  pune,
  patna,
  bhubaneswar,
  darjeeling,
  manali,
  rishikesh,
  haridwar,
  kochi,
} as const;

export type CitySlug = keyof typeof cities;
