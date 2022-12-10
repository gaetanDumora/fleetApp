import { FastifyReply, FastifyRequest } from "fastify";
import { Fleet } from "./fleetModel";

export const FLEETS_STORAGE: Fleet[] = [];

export async function registerFleetHandler(
  request: FastifyRequest<{ Body: { id: number } }>,
  reply: FastifyReply
) {
  const { body } = request;

  try {
    const fleet = new Fleet(body.id);
    FLEETS_STORAGE.push(fleet);
    return reply.code(201).send({ fleet: fleet.fleetId, create: true });
  } catch (e) {
    console.log(e);
    return reply.code(500).send(e);
  }
}
