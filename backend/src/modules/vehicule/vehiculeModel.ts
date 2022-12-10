import { EventEmitter } from "node:events";
import { coordinatesGenerator } from "../location/locationService";

export class Vehicule extends EventEmitter {
  readonly vehiculeId;
  private gps = coordinatesGenerator;
  readonly fleets: number[] = [];
  constructor(vehiculeId: number) {
    super();
    this.vehiculeId = vehiculeId;
  }
  park() {
    const currentLocation = this.gps();
    return this.emit("vehicule:parked", [currentLocation, this]);
  }
}
