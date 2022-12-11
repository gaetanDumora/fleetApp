import { FastifyReply, FastifyRequest } from "fastify";
import { getFleetById } from "../fleet/fleetService";
import { trackingLocationSystem } from "./locationSingleton";

export async function registerLocationHandler(
  request: FastifyRequest<{ Body: { fleet: number; vehiculeIds: number[] } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const fleet = getFleetById(body.fleet);
    if (!fleet) {
      return reply.code(404).send({ fleet: undefined });
    }

    const vehicules = fleet.getVehiculesByIds(body.vehiculeIds);
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

export async function findVehiculesAtLocations(
  request: FastifyRequest<{ Body: { coordinates: string[][] } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const vehicules = trackingLocationSystem.getVehiculesAt(body.coordinates);
    return reply.code(201).send({
      vehicules,
    });
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}
