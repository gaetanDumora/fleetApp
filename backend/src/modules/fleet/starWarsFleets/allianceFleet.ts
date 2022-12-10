import { Fleet } from "../fleetModel";
import { xWingHunters } from "../../vehicule/starWarsVehicules/xWingVehicules";

export const allianceFleet = new Fleet(777);
try {
  allianceFleet.registerVehicules(xWingHunters);
} catch (error) {
  console.error(error);
  allianceFleet.registerVehicules([]);
}
