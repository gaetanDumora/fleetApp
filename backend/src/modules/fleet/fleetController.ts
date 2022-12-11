import { FastifyReply, FastifyRequest } from "fastify";
import { Fleet } from "./fleetModel";
import { addFleet } from "./fleetService";

export async function registerFleetHandler(
  request: FastifyRequest<{ Body: { id: number } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const fleet = new Fleet(body.id);
    addFleet(fleet);
    return reply.code(201).send({ fleet: fleet.fleetId, create: true });
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}
