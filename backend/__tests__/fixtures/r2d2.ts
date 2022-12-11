import {
  Location,
  trackingLocationSystem,
} from "../../src/modules/location/locationSingleton";

export const r2d2: Location = trackingLocationSystem;
r2d2.takenLocations.clear();
r2d2.parkedVehicules.clear();
