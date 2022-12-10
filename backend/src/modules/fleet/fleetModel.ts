import { Vehicule } from "../vehicule/vehiculeModel";

export class Fleet {
  private fleetMap: Map<number, Vehicule> = new Map();
  readonly fleetId: number;
  constructor(fleetId: number) {
    this.fleetId = fleetId;
  }
  public registerVehicules(vehicules: Vehicule[]) {
    vehicules.forEach((vehicule) => {
      if (this.fleetMap.has(vehicule.vehiculeId)) {
        throw new RangeError(
          `Vehicule(s): ${vehicule.vehiculeId} already belong to Fleet: ${this.fleetId}`
        );
      }
      // Register this fleet with the vehicule
      vehicule.fleets.push(this.fleetId);
      // Register the vehicule with this fleet
      this.fleetMap.set(vehicule.vehiculeId, vehicule);
    });
    return this.fleetMap;
  }
  public getVehicules(vehiculeIds: number[]) {
    const vehicules: Vehicule[] = [];
    for (const id of vehiculeIds) {
      if (this.fleetMap.has(id)) {
        vehicules.push(this.fleetMap.get(id) as Vehicule);
      }
    }
    return vehicules;
  }
}
