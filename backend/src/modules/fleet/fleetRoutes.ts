import { FastifyInstance } from "fastify";
import { registerFleetHandler } from "./fleetController";

async function fleetRoutes(server: FastifyInstance) {
  server.post(
    "/fleet",
    {
      schema: {
        body: {
          type: "object",
          properties: { id: { type: "number" } },
        },
      },
    },
    registerFleetHandler
  );
}

export default fleetRoutes;
