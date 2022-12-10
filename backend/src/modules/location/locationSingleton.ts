import { Vehicule } from "../vehicule/vehiculeModel";

export class Location {
  readonly vehiculesLocation: Map<number, Vehicule> = new Map();
  private takenLocations: Map<string[], number> = new Map();

  trackParkedVehicule(vehicule: Vehicule) {
    if (this.takenLocations.has(vehicule.location)) {
      throw new Error(
        `Location [${
          vehicule.location
        }] is taken by vehicule: ${this.takenLocations.get(vehicule.location)}`
      );
    }
    this.takenLocations.set(vehicule.location, vehicule.vehiculeId);
    this.vehiculesLocation.set(vehicule.vehiculeId, vehicule);
  }
}

export const trackingLocationSystem = new Location();
