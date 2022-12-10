import { Vehicule } from "../vehicule/vehiculeModel";

export class Fleet {
  private fleetMap: Map<number, Vehicule> = new Map();
  private fleetId;
  constructor(fleetId: number) {
    this.fleetId = fleetId;
  }
  public registerVehicules(vehicules: Vehicule[]) {
    vehicules.forEach((vehicule) => {
      if (this.fleetMap.has(vehicule.vehiculeId)) {
        throw new RangeError(
          `Vehicule ${vehicule.vehiculeId} already belong to ${this.fleetId}`
        );
      }
      // Register this fleet with the vehicule
      vehicule.fleets.push(this.fleetId);
      // Register the vehicule with this fleet
      this.fleetMap.set(vehicule.vehiculeId, vehicule);
    });
    return this.fleetMap;
  }
}
