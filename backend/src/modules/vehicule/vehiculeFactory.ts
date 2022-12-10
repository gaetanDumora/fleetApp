import { trackingLocationSystem } from "../location/locationSingleton";
import { Vehicule } from "./vehiculeModel";

export const generateVehicules = (vehiculeIds: number[]) => {
  const uniqIds = [...new Set(vehiculeIds)];
  const vehicules = uniqIds.map((id) => new Vehicule(id));
  vehicules.forEach((vehicule) =>
    vehicule.on("vehicule:parked", (vhl) =>
      trackingLocationSystem.trackParkedVehicule(vhl)
    )
  );
  return vehicules;
};
