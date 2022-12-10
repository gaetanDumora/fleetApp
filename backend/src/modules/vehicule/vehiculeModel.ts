import { EventEmitter } from "node:events";
import { coordinatesGenerator } from "../location/locationService";

export class Vehicule extends EventEmitter {
  readonly vehiculeId: number;
  location: string[] = [];
  private gps = coordinatesGenerator;
  readonly fleets: number[] = [];
  constructor(vehiculeId: number) {
    super();
    this.vehiculeId = vehiculeId;
  }
  public park() {
    // We can't park vehicule already parked.
    if (this.location.length) {
      return;
    }
    const parkedLocation = this.gps();
    this.location = parkedLocation;
    return this.emit("vehicule:parked", this);
  }
}
