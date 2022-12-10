import { FastifyReply, FastifyRequest } from "fastify";
import { FLEETS_STORAGE } from "../fleet/fleetController";
import { trackingLocationSystem } from "./locationSingleton";

export async function registerLocationHandler(
  request: FastifyRequest<{ Body: { fleet: number; vehiculeIds: number[] } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const [fleet] = FLEETS_STORAGE.filter(
      ({ fleetId }) => body.fleet == fleetId
    );
    if (!fleet) {
      return reply.code(404).send({ fleet: undefined });
    }

    const vehicules = fleet.getVehicules(body.vehiculeIds);
    if (!vehicules.length) {
      return reply.code(404).send({ vehicules: undefined });
    }

    vehicules.forEach((vehicule) => vehicule.park());

    return reply.code(201).send({
      locations: vehicules.map(({ location }) => location),
    });
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}

export async function findVehiculesAtLocations() {}
