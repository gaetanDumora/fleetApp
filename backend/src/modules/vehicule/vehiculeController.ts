import { FastifyReply, FastifyRequest } from "fastify";
import { getFleetById } from "../fleet/fleetService";
import { generateVehicules } from "./vehiculeFactory";

export async function registerVehiculeHandler(
  request: FastifyRequest<{ Body: { fleet: number; vehiculeIds: number[] } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const fleet = getFleetById(body.fleet);
    if (!fleet) {
      return reply.code(404).send({ fleet: undefined });
    }
    const vehicules = generateVehicules(body.vehiculeIds);
    fleet.registerVehicules(vehicules);
    return reply.code(201).send({
      fleet: fleet.fleetId,
      vehiculeIds: vehicules.map(({ vehiculeId }) => vehiculeId),
    });
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}
