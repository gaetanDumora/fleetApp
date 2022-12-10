import { Fleet } from "../fleetModel";
import { tieHunters } from "../../vehicule/starWarsVehicules.ts/tieHunterVehicules";

export const imperialFleet = new Fleet(666);
try {
  imperialFleet.registerVehicules(tieHunters);
} catch (error) {
  console.error(error);
  imperialFleet.registerVehicules([]);
}
