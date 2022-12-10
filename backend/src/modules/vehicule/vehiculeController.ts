import { FastifyReply, FastifyRequest } from "fastify";
import { FLEETS_STORAGE } from "../fleet/fleetController";
import { generateVehicules } from "./vehiculeFactory";

export async function registerVehiculeHandler(
  request: FastifyRequest<{ Body: { fleet: number; vehiculeIds: string } }>,
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
    const vehicules = generateVehicules(JSON.parse(body.vehiculeIds));
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
