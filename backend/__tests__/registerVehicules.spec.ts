import { describe, it, expect } from "@jest/globals";

import { generateVehicules } from "../src/modules/vehicule/vehiculeFactory";
import { xWingHunters } from "../src/modules/vehicule/starWarsVehicules/xWingVehicules";
import { imperialFleet } from "../src/modules/fleet/starWarsFleets/imperialFleet";
import { allianceFleet } from "../src/modules/fleet/starWarsFleets/allianceFleet";

describe("registerVehicules", () => {
  it("should prevent to generate duplicate hunters", () => {
    const duplicatesXwing = generateVehicules([1, 1, 1, 1]);

    expect(duplicatesXwing).toHaveLength(1);
  });

  it("should throw an error if we register existing vehicules in an existing fleet", () => {
    expect(() => allianceFleet.registerVehicules(xWingHunters)).toThrow();
  });

  it("should be possible to register hunter in several fleet", () => {
    const neutralHunter = generateVehicules([0]);

    imperialFleet.registerVehicules(neutralHunter);
    allianceFleet.registerVehicules(neutralHunter);

    expect(neutralHunter[0].fleets).toContain(imperialFleet.fleetId);
    expect(neutralHunter[0].fleets).toContain(allianceFleet.fleetId);
  });
});
