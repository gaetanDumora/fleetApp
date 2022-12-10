import { Vehicule } from "../vehicule/vehiculeModel";

export class Location {
  readonly vehiculesLocation: Map<number, Vehicule> = new Map();
  readonly takenLocations: Map<string[], number> = new Map();

  public trackParkedVehicule(vehicule: Vehicule) {
    if (
      this.takenLocations.has(vehicule.location) ||
      this.vehiculesLocation.has(vehicule.vehiculeId)
    ) {
      throw new Error(
        `Location [${vehicule.location}] is taken by vehicule: ${vehicule.vehiculeId}`
      );
    }
    this.takenLocations.set(vehicule.location, vehicule.vehiculeId);
    this.vehiculesLocation.set(vehicule.vehiculeId, vehicule);
  }

  public getVehiculesAt(coordinates: string[][]) {
    const vehicules: Vehicule[] = [];
    for (const coordinate of coordinates) {
      if (this.takenLocations.has(coordinate)) {
        const id = this.takenLocations.get(coordinate) as number;
        vehicules.push(this.vehiculesLocation.get(id) as Vehicule);
      }
    }
    return vehicules;
  }
}

export const trackingLocationSystem = new Location();
