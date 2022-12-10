import { EventEmitter } from "node:events";
import { coordinatesGenerator } from "../location/locationService";

export class Vehicule extends EventEmitter {
  readonly vehiculeId;
  location: string[] = [];
  private gps = coordinatesGenerator;
  readonly fleets: number[] = [];
  constructor(vehiculeId: number) {
    super();
    this.vehiculeId = vehiculeId;
  }
  park() {
    // We can't park vehicule already parked.
    if (this.location.length) {
      return;
    }
    const parkLocation = this.gps();
    this.location = parkLocation;
    return this.emit("vehicule:parked", this);
  }
}
