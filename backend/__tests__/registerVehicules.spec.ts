import { describe, it, expect } from "@jest/globals";

import { generateVehicules } from "../src/modules/vehicule/vehiculeFactory";
import { Fleet } from "../src/modules/fleet/fleetModel";

describe("registerVehicules", () => {
  const fleet666 = new Fleet(666);

  it("should prevent to generate duplicate vehicules", () => {
    const vehicules = generateVehicules([1, 1, 1]);
    fleet666.registerVehicules(vehicules);
    expect(vehicules).toHaveLength(1);
  });

  it("should throw an error if we register an existing vehicule in an existing fleet", () => {
    const vehicules = generateVehicules([1, 2]);
    expect(() => fleet666.registerVehicules(vehicules)).toThrowError(
      "Vehicule 1 already belong to 666"
    );
  });
});
