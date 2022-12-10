import { generateVehicules } from "../vehiculeFactory";
import { trackingLocationSystem } from "../../location/locationSingleton";

export const tieHunters = generateVehicules([1, 2, 3, 4, 5]);
for (const hunter of tieHunters) {
  hunter.on("vehicule:parked", ([location, hunter]) =>
    trackingLocationSystem.trackParkedVehicule(location, hunter)
  );
}
