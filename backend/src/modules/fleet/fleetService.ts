import { Fleet } from "./fleetModel";

const STORAGE: Map<number, Fleet> = new Map();

export const addFleet = (fleet: Fleet) => {
  if (STORAGE.has(fleet.fleetId)) {
    throw new Error(`Fleet: ${fleet.fleetId} already exist`);
  }
  STORAGE.set(fleet.fleetId, fleet);
  return STORAGE.size;
};

export const getFleetById = (id: number) => STORAGE.get(id);
