import { describe, it, expect } from "@jest/globals";
import { generateVehicules } from "../src/modules/vehicule/vehiculeFactory";
import { allianceFleet } from "./fixtures/starWarsFleets/allianceFleet";
import { imperialFleet } from "./fixtures/starWarsFleets/imperialFleet";
import { xWingHunters } from "./fixtures/starWarsVehicules/xWingVehicules";

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
