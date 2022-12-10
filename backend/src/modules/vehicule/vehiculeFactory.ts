import { Vehicule } from "./vehiculeModel";

export const generateVehicules = (vehiculeIds: number[]) => {
  const uniqIds = [...new Set(vehiculeIds)];
  return uniqIds.map((id) => new Vehicule(id));
};
