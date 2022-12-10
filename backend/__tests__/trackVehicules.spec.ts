import { trackingLocationSystem } from "../src/modules/location/locationSingleton";
import { describe, expect, it } from "@jest/globals";
import { tieHunters } from "../src/modules/vehicule/starWarsVehicules/tieHunterVehicules";

const testTrackingLocationSystem = trackingLocationSystem;
testTrackingLocationSystem.vehiculesLocation.clear();

describe("trackingLocationSystem", () => {
  it("should regiter hunter location when parked, and it can't park twice", () => {
    // Xwing hits hunter 3, he needs to be fixed
    tieHunters[3].park();
    tieHunters[3].park();
    expect(testTrackingLocationSystem.vehiculesLocation.size).toEqual(1);
  });

  it("should throw an error if we park vehicule on taken location", () => {
    const tieHunter3Location =
      testTrackingLocationSystem.vehiculesLocation.get(tieHunters[3].vehiculeId)
        ?.location ?? [];
    // Assign to a new hunter, a taken loaction
    tieHunters[1].location = tieHunter3Location;

    expect(() =>
      testTrackingLocationSystem.trackParkedVehicule(
        tieHunters[1].location,
        tieHunters[1]
      )
    ).toThrow();
  });
});
