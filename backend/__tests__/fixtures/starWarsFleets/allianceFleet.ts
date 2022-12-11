import { Fleet } from "../../../src/modules/fleet/fleetModel";
import { xWingHunters } from "../starWarsVehicules/xWingVehicules";

export const allianceFleet = new Fleet(777);
try {
  allianceFleet.registerVehicules(xWingHunters);
} catch (error) {
  console.error(error);
  allianceFleet.registerVehicules([]);
}
