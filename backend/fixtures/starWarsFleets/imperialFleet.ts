import { Fleet } from "../../src/modules/fleet/fleetModel";
import { tieHunters } from "../starWarsVehicules/tieHunterVehicules";

export const imperialFleet = new Fleet(666);
try {
  imperialFleet.registerVehicules(tieHunters);
} catch (error) {
  console.error(error);
  imperialFleet.registerVehicules([]);
}
