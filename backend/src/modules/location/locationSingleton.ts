import { Vehicule } from "../vehicule/vehiculeModel";

export class Location {
  readonly vehiculesLocation: Map<number, Vehicule> = new Map();
  private takenLocations: Map<string[], number> = new Map();

  trackParkedVehicule(coordinates: string[], vehicule: Vehicule) {
    if (this.takenLocations.has(coordinates)) {
      throw new Error(
        `Location [${coordinates}] is taken by vehicule: ${this.takenLocations.get(
          coordinates
        )}`
      );
    }
    this.takenLocations.set(coordinates, vehicule.vehiculeId);
    this.vehiculesLocation.set(vehicule.vehiculeId, vehicule);
  }
}

export const trackingLocationSystem = new Location();
