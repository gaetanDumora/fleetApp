import { Vehicule } from "../vehicule/vehiculeModel";

export class Location {
  readonly parkedVehicules: Map<number, Vehicule> = new Map();
  readonly takenLocations: Map<string, number> = new Map();

  public trackParkedVehicule(vehicule: Vehicule) {
    if (
      this.takenLocations.has(String(vehicule.location)) ||
      this.parkedVehicules.has(vehicule.vehiculeId)
    ) {
      throw new Error(
        `Location [${vehicule.location}] is taken by vehicule: ${vehicule.vehiculeId}`
      );
    }
    this.takenLocations.set(String(vehicule.location), vehicule.vehiculeId);
    this.parkedVehicules.set(vehicule.vehiculeId, vehicule);
  }

  public getVehiculesAt(coordinates: string[][]) {
    const vehicules: Vehicule[] = [];
    for (const coordinate of coordinates.map((c) => c.map(String))) {
      if (this.takenLocations.has(String(coordinate))) {
        const id = this.takenLocations.get(String(coordinate));
        vehicules.push(this.parkedVehicules.get(Number(id)) as Vehicule);
      }
    }
    return vehicules.map(({ fleets, vehiculeId, location }) => ({
      belongTo: fleets,
      vehiculeId,
      location,
    }));
  }
}

export const trackingLocationSystem = new Location();
