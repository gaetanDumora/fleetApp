import { trackingLocationSystem } from "../../location/locationSingleton";
import { generateVehicules } from "../vehiculeFactory";

export const xWingHunters = generateVehicules([1, 2, 3, 4, 5]);
for (const hunter of xWingHunters) {
  hunter.on("vehicule:parked", (hunter) =>
    trackingLocationSystem.trackParkedVehicule(hunter)
  );
}
