import { trackingLocationSystem } from "../src/modules/location/locationSingleton";
import { describe, expect, it } from "@jest/globals";
import { tieHunters } from "../fixtures/starWarsVehicules/tieHunterVehicules";
import { xWingHunters } from "../fixtures/starWarsVehicules/xWingVehicules";

describe("trackingLocationSystem", () => {
  it("should regiter hunter location when parked, and it can't park twice", () => {
    // Xwing hits hunter 3, he needs to be fixed
    tieHunters[3].park();
    tieHunters[3].park();

    const parkedLocation = trackingLocationSystem.vehiculesLocation.get(
      tieHunters[3].vehiculeId
    )?.location;

    expect(trackingLocationSystem.vehiculesLocation.size).toEqual(1);
    expect(parkedLocation).toBeDefined();
  });

  it("should throw an error if a Xwing try to park on location taken by a TieHunter", () => {
    // As coordinates are generated randomly, lets pick an existing parked hunter
    const tieHunter3 = trackingLocationSystem.vehiculesLocation.get(
      tieHunters[3].vehiculeId
    );
    // Get its parked coordinates
    const tieHunter3Location = tieHunter3?.location ?? [];
    // Assign to a new hunter, the taken loaction
    xWingHunters[1].location = tieHunter3Location;

    expect(() =>
      trackingLocationSystem.trackParkedVehicule(xWingHunters[1])
    ).toThrow();
  });

  it("should return the hunter parked at this location", () => {
    // Xwing flies and has no particular location
    const locationBeforePark = xWingHunters[4].location;
    // Xwing come back to the base and parked
    xWingHunters[4].park();
    // Now he had a location registred
    const allianceParking = xWingHunters[4].location;

    expect(locationBeforePark.length).toEqual(0);
    expect(
      trackingLocationSystem.getVehiculesAt([allianceParking])[0].vehiculeId
    ).toEqual(xWingHunters[4].vehiculeId);
  });
});
